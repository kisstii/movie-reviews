import { useState, useEffect } from "react";

function ReadReviews({ movie_id, setCurrentMovieId, setCurrentTitle, currentTitle, showAllReview, setShowAllReview }) {
  const [allReview, setAllReview] = useState("");

  const getAllReview = () => {
    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:8000/api/reviews/movie/${movie_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setAllReview(result);
        setCurrentMovieId("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // console.log(allReview);

  useEffect(() => {
    getAllReview();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mainReviewContainer">
      {showAllReview && (
        <div className="reviewContainer">
          <div className="reviewTitle">{currentTitle}</div>
          <form className="review"></form>
          <button type="button" className="reviewActionButton" onClick={() => setShowAllReview(false) + setCurrentTitle("")}>
            close
          </button>
        </div>
      )}
    </div>
  );
}

export default ReadReviews;
