const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Review = require("../models/review.model");
const mongoose = require("mongoose");
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
  }).select({ userId: 1, "reviews.$": 1 });

  res.json(reviews);
});

exports.setReviewByMovie = asyncHandler(async (req, res) => {
  const user = await User.findOne({ user_id: req.user.user_id });
  
  const newReview = new Review({
    userId: mongoose.Types.ObjectId(user._id),
    user_id: user.user_id,
    reviews: [
      {
        "movieId": req.params.id,
        "review": req.body.review
      }
    ],
  });

  const review = await Review.findOne({ user_id: user.user_id });
  if (review) {
    const new_review = {
      movieId: req.params.id,
      review: req.body.review,
    };
    await Review.findOneAndUpdate({ "user_id": user.user_id, "reviews.movieId": req.params.id}, { $push: new_review });
  } else {
    await newReview.save();  
  }
  
  res.json({ "message": "OK" });
});
