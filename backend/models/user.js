const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  name: {
    family_name: { type: String, required: true },
    given_name: { type: String, required: true },
  },
  picture: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema, "users");
