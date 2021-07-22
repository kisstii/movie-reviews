import noImage from "../img/no-image.png";
import Review from "./review";

function Movie({ movie_title, movie_id, backdrop_path, poster_path, setShowReviewForm, setCurrentMovieId, showReviewForm, setCurrentTitle }) {
  return (
    <div className="movieContainer">
      {<img className="noImage" src={noImage} alt="no" />}
      {backdrop_path && <img className="movieImage" src={`http://image.tmdb.org/t/p/w500${backdrop_path}`} alt="backdrop" />}
      {!backdrop_path && poster_path && <img className="movieImage" src={`http://image.tmdb.org/t/p/w342${poster_path}`} alt="backdrop" />}
      <div className="movieTitle">{movie_title}</div>
      <Review
        movie_id={movie_id}
        movie_title={movie_title}
        setShowReviewForm={setShowReviewForm}
        setCurrentMovieId={setCurrentMovieId}
        showReviewForm={showReviewForm}
        setCurrentTitle={setCurrentTitle}
      />
    </div>
  );
}

export default Movie;
