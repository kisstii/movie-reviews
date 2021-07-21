import { useState, useEffect } from "react";
import Movie from "./movie";

function Review() {
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/api/movies/${search}`)
      .then((response) => response.json())
      .then((result) => {
        setMovies(result);
        console.log(result);
        setSearch("");
        setAlert("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {}, []);

  return (
    <>
      <div className="formContainer">
        <div className="form">
          <input className="inputData" type="text" placeholder="type a movie title" value={search} onInput={(e) => setSearch(e.target.value)} />
          <button type="submit" className="actionButton" onClick={searchMovie}>
            search
          </button>
        </div>
      </div>
      <div className="alertBar">
        <p className="alert">{alert}</p>
      </div>
      <div className="mainBodyContainer">
        {movies.results &&
          movies.results.map((movie) => <Movie key={movie.id} title={movie.title} id={movie.id} backdrop_path={movie.backdrop_path} poster_path={movie.poster_path} />)}
      </div>
    </>
  );
}

export default Review;
