function OtherReviews({ review, username }) {
  return (
    <div>
      <p className="otherReviewData">
        {username}- {review}
      </p>
    </div>
  );
}

export default OtherReviews;
