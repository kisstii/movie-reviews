const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  user_id: { type: String, required: true },
  reviews: [
    {
      movieId: {
        type: Number,
        required: true,
      },
      review: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Review", reviewSchema, "reviews");
