import OtherReview from "./otherReview";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

function ReadReviews({ movie_id, setCurrentMovieId, setCurrentTitle, currentTitle, showAllReviews, setShowAllReviews }) {
  const [allReviews, setAllReviews] = useState("");

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
        setAllReviews(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllReview();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mainReviewContainer">
      <div className="reviewContainer">
        <div className="reviewTitle">{currentTitle}</div>
        <form className="review">
          <div className="prevReviewData">
            {allReviews?.length &&
              allReviews.map((review) => (
                <OtherReview key={uuidv4()} review={review.reviews[0].review} username={`${review.user.name.given_name} ${review.user.name.family_name}`} />
              ))}
          </div>
          <div className="reviewFormButtonContainer">
            <button type="button" className="reviewActionButton" onClick={() => setShowAllReviews(false) + setCurrentTitle("") + setAllReviews("")}>
              close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReadReviews;
