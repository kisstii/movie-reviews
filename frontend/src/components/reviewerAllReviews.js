function ReviewerAllReviews({ review }) {
  return (
    <div className="reviewByUserContainer">
      <div className="reviewByUser">movie id: {review.movieId}</div>
      <div className="reviewByUser">review: {review.review}</div>
    </div>
  );
}

export default ReviewerAllReviews;
