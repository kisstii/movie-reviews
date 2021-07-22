import { useState } from "react";
import ReviewForm from "./reviewForm";

function Review({ movie_id }) {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <>
      <div className="reviewButtonContainer">
        <button className="reviewButton" onClick={() => setShowReviewForm(true)}>
          write a review
        </button>
        <button className="reviewButton">read reviews</button>
      </div>
      {showReviewForm && <ReviewForm movie_id={movie_id} setShowReviewForm={setShowReviewForm} />}
    </>
  );
}

export default Review;
