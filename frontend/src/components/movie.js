import noImage from "../img/no-image.png";

function Movie({ title, id, backdrop_path, poster_path }) {
  return (
    <div className="movieContainer">
      {<img className="noImage" src={noImage} alt="no" />}
      {backdrop_path && <img className="movieImage" src={`http://image.tmdb.org/t/p/w500${backdrop_path}`} alt="backdrop" />}
      {!backdrop_path && poster_path && <img className="movieImage" src={`http://image.tmdb.org/t/p/w342${poster_path}`} alt="backdrop" />}
      <div className="movieTitle">{title}</div>
    </div>
  );
}

export default Movie;
