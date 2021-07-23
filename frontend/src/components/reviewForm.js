import { useState, useEffect } from "react";

function ReviewForm({ movie_id, setShowReviewForm, setCurrentMovieId, setCurrentTitle, currentTitle }) {
  const [newReview, setNewReview] = useState("");
  const [prevReview, setPrevReview] = useState("");

  const createNewReview = () => {
    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:8000/api/review/movie/${movie_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        review: newReview,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setNewReview("");
        setShowReviewForm(false);
        setCurrentMovieId("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getPrevReview = () => {
    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:8000/api/review/movie/${movie_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result[0]) {
          setPrevReview(result[0].reviews[0].review);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPrevReview();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mainReviewContainer">
      <div className="reviewContainer">
        <div>
          <div className="reviewTitle">{currentTitle}</div>
          <form className="review">
            <textarea
              className="reviewData"
              type="text"
              placeholder={!prevReview ? "write a review" : "overwrite your previous review"}
              value={newReview}
              onInput={(e) => setNewReview(e.target.value)}
              required
            />
            <div className="reviewFormButtonContainer">
              <button type="button" className="reviewActionButton" onClick={createNewReview}>
                send review
              </button>
              <button type="button" className="reviewActionButton" onClick={() => setNewReview("") + setShowReviewForm(false) + setCurrentTitle("")}>
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      {prevReview && (
        <div className="reviewContainer">
          <div className="reviewTitle">previous review</div>
          <form className="review">
            <div className="prevReviewData">{prevReview}</div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
