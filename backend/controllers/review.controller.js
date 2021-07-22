const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Review = require("../models/review.model");
const mongoose = require("mongoose");
const ObjectId = require("mongoose").Types.ObjectId;

exports.getReviewsByUser = asyncHandler(async (req, res) => {
  const review = await Review.findOne({
    user: new ObjectId(req.params.id),
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
  })
    .populate("user", "name picture")
    .select({ "user": 1 , "reviews.$": 1 });

  res.json(reviews);
});

exports.setReviewByMovie = asyncHandler(async (req, res) => {
  const user = await User.findOne({ user_id: req.user.user_id });

  const review = await Review.findOne({ user_id: user.user_id });
  if (review) {
    const new_review = {
      movieId: req.params.id,
      review: req.body.review,
    };

    const i = review.reviews.findIndex(
      (item) => item.movieId === parseInt(req.params.id)
    );
    if (i >= 0) {
      review.reviews[i].review = req.body.review;
    } else {
      review.reviews.push({
        movieId: req.params.id,
        review: req.body.review,
      });
    }
    review.save();
  } else {
    const newReview = new Review({
      user: mongoose.Types.ObjectId(user._id),
      user_id: user.user_id,
      reviews: [
        {
          movieId: req.params.id,
          review: req.body.review,
        },
      ],
    });

    await newReview.save();
  }

  res.json({ message: "OK" });
});
