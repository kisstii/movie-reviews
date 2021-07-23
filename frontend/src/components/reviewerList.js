import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import Reviewer from "./reviewer";

function ReviewerList() {
  const [allReviewers, setAllReviewers] = useState("");

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
  console.log(allReviewers);
  useEffect(() => {
    getAllReviewers();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="formContainer">
        <div className="form"></div>
      </div>
      <div className="mainBodyContainer">
        <div className="bodyContainer">{allReviewers[0] && allReviewers.map((reviewer) => <Reviewer key={uuidv4()} reviewer={reviewer} />)}</div>
      </div>
    </>
  );
}

export default ReviewerList;
