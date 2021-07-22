const router = require("express").Router();

const checkAuthorization = require("../middlewares/checkAuthorization");
const moviesController = require("../controllers/movie-api.controller");

router.get("/movies/:search", checkAuthorization, moviesController.getMovies);
router.get("/movies/:search/:page", checkAuthorization, moviesController.getMovies);
router.get("/movie/:id", checkAuthorization, moviesController.getMovieById);

module.exports = router;
