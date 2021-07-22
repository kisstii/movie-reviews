import { useState, useEffect } from "react";
import Movie from "./movie";
import back from "../img/back.png";
import next from "../img/next.png";
import fastForward from "../img/fast-forward.png";
import fastBackward from "../img/fast-backward.png";

function MovieList() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [prevSearch, setPrevSearch] = useState("");

  const searchMovieFirst = () => {
    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:8000/api/movies/${prevSearch}/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setMovies(result);
        setPage(1);
        setNumberOfPages(result.total_pages);
        console.log(result);
        setSearch("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchMovie = () => {
    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:8000/api/movies/${prevSearch}/${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setMovies(result);
        setNumberOfPages(result.total_pages);
        console.log(result);
        setSearch("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    searchMovie();
    // eslint-disable-next-line
  }, [page]);

  function paginator(p) {
    if (p === 1 && page < numberOfPages) {
      setPage((page) => page + 1);
    }
    if (p === -1 && page > 1) {
      setPage((page) => page - 1);
    }
  }

  return (
    <>
      <div className="formContainer">
        <div className="form">
          <input className="inputData" type="text" placeholder="type a movie title" value={search} onInput={(e) => setSearch(e.target.value) + setPrevSearch(e.target.value)} />
          <button type="button" className="actionButton" onClick={searchMovieFirst}>
            search
          </button>
        </div>
      </div>
      <div className="alertBar"></div>
      <div className="mainBodyContainer">
        <div className="bodyContainer">
          {movies.results?.length > 0 &&
            movies.results.map((movie) => <Movie key={movie.id} title={movie.title} id={movie.id} backdrop_path={movie.backdrop_path} poster_path={movie.poster_path} />)}
          {movies.results?.length > 0 && (
            <div className="paginatorContainer">
              <div className="arrowContainer">
                <img className="arrow" src={fastBackward} alt="fast backward" onClick={() => setPage(1)} />
                <img className="arrow" src={back} alt="back" onClick={() => paginator(-1)} />
              </div>
              <div className="pageNumber">
                {page}/{numberOfPages}
              </div>
              <div className="arrowContainer">
                <img className="arrow" src={next} alt="next" onClick={() => paginator(1)} />
                <img className="arrow" src={fastForward} alt="fast forward" onClick={() => setPage(numberOfPages)} />
              </div>
            </div>
          )}
          <div className="bottomBar"></div>
        </div>
      </div>
    </>
  );
}

export default MovieList;
