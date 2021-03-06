const asyncHandler = require("express-async-handler");
const axios = require("axios");

exports.getMovies = asyncHandler(async (req, res) => {
  if (req.params.search) {
    axios
      .get(process.env.MOVIE_API_SEARCH_URL, {
        params: {
          api_key: process.env.MOVIE_API_KEY,
          query: req.params.search.replace(" ", "+"),
          page: req.params.page === undefined ? 1 : req.params.page,
        },
      })
      .then((response) => res.json(response.data));
  } else res.json({})
});


exports.getMovieById = asyncHandler(async (req, res) => {
  axios
    .get(process.env.MOVIE_API_DETAILS_URL.concat("/" + req.params.id), {
      params: {
        api_key: process.env.MOVIE_API_KEY,
      },
    })
    .then((response) => res.json(response.data));
});
