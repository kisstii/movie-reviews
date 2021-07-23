function Reviewer({ reviewer, getReviewerAllReview, setReviewerName, setShowAllReviews }) {
  return (
    <div
      className="reviewerContainer"
      onClick={() => setReviewerName(`${reviewer.user.name.family_name} ${reviewer.user.name.given_name}`) + getReviewerAllReview(reviewer._id) + setShowAllReviews(true)}
    >
      <div className="reviewerNameContainer">
        <div className="reviwerName">{`${reviewer.user.name.family_name} ${reviewer.user.name.given_name}`}</div>
      </div>
      <img className="reviewerPicture" src={reviewer.user.picture} alt="user" />
    </div>
  );
}

export default Reviewer;
