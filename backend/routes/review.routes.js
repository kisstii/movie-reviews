const router = require("express").Router();

const checkAuthorization = require("../middlewares/checkAuthorization");
const reviewController = require("../controllers/review.controller");

//TODO: még nem műxik
// visszadja, a felhasználókat akik írtak reviewt
router.get(
  "/reviews/users",
  checkAuthorization,
  reviewController.getReviewUsers
);

//TODO: még nem műxik
// visszadja, hogy egy adott felhasználó milyen review-kat írt
router.get(
  "/reviews/user/:id",
  checkAuthorization,
  reviewController.getReviewsByUser
);

// visszadja adott filmhez az összes review-t
router.get(
  "/reviews/movie/:id",
  checkAuthorization,
  reviewController.getReviewsByMovie
);


// visszadja a bejelentkezett felhasználó összes review-ját
router.get(
  "/reviews",
  checkAuthorization,
  reviewController.getMyReviews
);

// visszadja hogy az adott filmhez milyen review-t írt a bejelentkezett felhasználó
router.get(
  "/review/movie/:id",
  checkAuthorization,
  reviewController.getMyReviews
);

// review tárolása
router.post(
  "/review/movie/:id",
  checkAuthorization,
  reviewController.setReviewByMovie
);

module.exports = router;
