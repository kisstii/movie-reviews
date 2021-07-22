import { useState } from "react";

function ReviewForm({ movie_id, setShowReviewForm }) {
  const [newReview, setNewReview] = useState("");

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
        console.log(result);
        setNewReview("");
        setShowReviewForm(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="reviewContainer">
      <form className="review">
        <textarea className="reviewData" type="text" placeholder="write a review" value={newReview} onInput={(e) => setNewReview(e.target.value)} />
        <button type="button" className="reviewActionButton" onClick={createNewReview}>
          send review
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
