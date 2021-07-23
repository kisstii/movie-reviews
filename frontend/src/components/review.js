function Review({ movie_id, setShowReviewForm, setCurrentMovieId, showReviewForm, movie_title, setCurrentTitle, setShowAllReviews, showAllReviews }) {
  return (
    <div className="reviewButtonContainer">
      {showReviewForm && <button className="reviewButton">write a review</button>}
      {!showReviewForm && (
        <button className="reviewButton" onClick={() => setShowReviewForm(true) + setCurrentMovieId(movie_id) + setCurrentTitle(movie_title)}>
          write a review
        </button>
      )}
      {!showAllReviews && (
        <button className="reviewButton" onClick={() => setShowAllReviews(true) + setCurrentMovieId(movie_id) + setCurrentTitle(movie_title)}>
          read reviews
        </button>
      )}
      {showAllReviews && <button className="reviewButton">read reviews</button>}
    </div>
  );
}

export default Review;
