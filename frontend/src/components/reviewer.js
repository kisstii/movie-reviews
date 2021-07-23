function Reviewer({ reviewer }) {
  return (
    <div className="reviewerContainer">
      <div className="reviewerNameContainer">
        <div className="reviwerName">{`${reviewer.user.name.family_name} ${reviewer.user.name.given_name}`}</div>
      </div>
      <img className="reviewerPicture" src={reviewer.user.picture} alt="user" />
    </div>
  );
}

export default Reviewer;
