import { useState } from "react";

function ReviewForm() {
  const [newReview, setNewReview] = useState("");

  // const createNewReview = (e) => {
  //   e.preventDefault();
  //   fetch("/api/groups/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       search: newReview,
  //             }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setNewReview("");
  //       if (result.error) {
  //         return setAlert(result.error);
  //       }
  //       if (result.success) {
  //         fetchGroup(userId);
  //         setAlert("");
  //       } else {
  //         console.error("Something went wrong");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <>
      <div className="formContainer">
        <form className="form">
          <input className="inputData" type="text" placeholder="write a review" value={newReview} onInput={(e) => setNewReview(e.target.value)} />
          <button type="submit" className="actionButton" onClick={createNewReview}>
            Add review
          </button>
        </form>
      </div>
      <div className="alertBar">
        <p className="alert">{alert}</p>
      </div>
    </>
  );
}

export default ReviewForm;
