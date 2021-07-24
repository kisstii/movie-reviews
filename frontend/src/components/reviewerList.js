import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import Reviewer from "./reviewer";
import ReviewerAllReviews from "./reviewerAllReviews";

function ReviewerList() {
  const [allReviewers, setAllReviewers] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [reviewerName, setReviewerName] = useState("");
  const [showAllReviews, setShowAllReviews] = useState(false);

  const getAllReviewers = () => {
    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:8000/api/reviews/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setAllReviewers(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllReviewers();
    // eslint-disable-next-line
  }, []);

  const getReviewerAllReview = (user_id) => {
    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:8000/api/reviews/user/${user_id}`, {
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

  return (
    <>
      <div className="formContainer">
        <div className="form"></div>
      </div>
      <div className="mainBodyContainer">
        <div className="bodyContainer">
          {allReviewers[0] &&
            !showAllReviews &&
            allReviewers.map((reviewer) => (
              <Reviewer key={uuidv4()} reviewer={reviewer} getReviewerAllReview={getReviewerAllReview} setReviewerName={setReviewerName} setShowAllReviews={setShowAllReviews} />
            ))}
          {allReviews[0] && showAllReviews && (
            <div className="mainAllReviewsContainer">
              <div className="reviwerNameOnList">{reviewerName}</div>
              {allReviews[0].reviews.map((review) => (
                <ReviewerAllReviews key={uuidv4()} review={review} setShowAllReviews={setShowAllReviews} />
              ))}
              <button type="button" className="reviewsCloseButton" onClick={() => setShowAllReviews(false) + setAllReviews([])}>
                close
              </button>
            </div>
          )}
          <div className="bottomBar"></div>
        </div>
      </div>
    </>
  );
}

export default ReviewerList;
