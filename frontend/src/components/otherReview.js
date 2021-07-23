function OtherReviews({ review, username }) {
  return (
    <div>
      {username && (
        <p className="otherReviewData">
          {username} - {review}
        </p>
      )}
      {!username && <p className="otherReviewData">no one has written a review yet</p>}
    </div>
  );
}

export default OtherReviews;
