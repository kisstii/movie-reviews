function Review({ movie_id, setShowReviewForm, setCurrentMovieId, showReviewForm, movie_title, setCurrentTitle, setShowAllReview }) {
  return (
    <div className="reviewButtonContainer">
      {showReviewForm && <button className="reviewButton">write a review</button>}
      {!showReviewForm && (
        <button className="reviewButton" onClick={() => setShowReviewForm(true) + setCurrentMovieId(movie_id) + setCurrentTitle(movie_title)}>
          write a review
        </button>
      )}
      <button className="reviewButton" onClick={() => setShowAllReview(true) + setCurrentMovieId(movie_id) + setCurrentTitle(movie_title)}>
        read reviews
      </button>
    </div>
  );
}

export default Review;
