import { useState } from "react";

function ReviewForm({ movie_id }) {
  const [newReview, setNewReview] = useState("");

  const createNewReview = () => {
    const token = localStorage.getItem("accessToken");
    fetch(`/api/review/movie${movie_id}`, {
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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="formContainer">
        <form className="form">
          <textarea className="inputData" type="text" placeholder="write a review" value={newReview} onInput={(e) => setNewReview(e.target.value)} />
          <button type="submit" className="actionButton" onClick={createNewReview}>
            Add review
          </button>
        </form>
      </div>
    </>
  );
}

export default ReviewForm;
