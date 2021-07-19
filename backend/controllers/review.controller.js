const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Review = require("../models/review.model");
const ObjectId = require("mongoose").Types.ObjectId;

exports.getReviewsByUser = asyncHandler(async (req, res) => {
  const review = await Review.findOne({
    userId: new ObjectId(req.params.id),
  });

  return review;
});

const initiaUsers = [
  {
    username: "public",
  },
];

exports.getReviewsByMovie = asyncHandler(async (req, res) => {
  const reviews = await Review.find({
    "reviews.movieId": req.params.id,
  }).select({ "userId": 1, "reviews.$": 1 });

  res.json(reviews);
});

exports.setReviewByMovie = asyncHandler(async (req, res) => {

  res.json({});
});
