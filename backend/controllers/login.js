require("dotenv").config();
const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");
const User = require("../models/user");

module.exports = async (req, res) => {
  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: req.body.authCode,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: "http://localhost:3000/login",
        grant_type: "authorization_code",
      }),
    });

    const data = await response.json();

    if (!data.id_token) {
      return res.json("Something went wrong");
    }
    const decodedToken = jwt.decode(data.id_token);
    const searchUser = await User.findOne({ user_id: decodedToken.sub });

    if (!searchUser) {
      const user = new User({
        user_id: decodedToken.sub,
        name: { family_name: decodedToken.family_name, given_name: decodedToken.given_name },
        picture: decodedToken.picture,
      });
      await user.save();
    }

    const accessToken = jwt.sign(
      {
        user_id: decodedToken.sub,
        user_email: decodedToken.email,
        user_given_name: decodedToken.given_name,
        user_picture: decodedToken.picture,
      },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({ accessToken });
  } catch (err) {
    console.log(err);
  }
};
