const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const verifyJwt = (token) => {  
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};

module.exports = asyncHandler(async (req, res, next) => {
  if (process.env.JWT_NOCHECK === "false") {
    try {      
      const authorization = req.headers["authorization"];
      req.user = await verifyJwt(authorization);

    } catch (err) {
      throw { message: "Unauthorized", status: 401 };
    }
  }

  next();
});
