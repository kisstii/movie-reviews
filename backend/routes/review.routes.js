const router = require("express").Router();

const checkAuthorization = require("../middlewares/checkAuthorization");
const reviewController = require("../controllers/review.controller");

router.get(
  "/reviews/user/:id",
  checkAuthorization,
  reviewController.getReviewsByUser
);

router.get(
  "/reviews/movie/:id",
  checkAuthorization,
  reviewController.getReviewsByMovie
);

router.post(
  "/review/movie/:id",
  checkAuthorization,
  reviewController.setReviewByMovie
);

module.exports = router;
