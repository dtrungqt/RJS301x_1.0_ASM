const OtherInfomation = () => {
  return (
    <div className="other-container">
      <div className="promotion-container row">
        <div className="col-12 col-sm-4 mb-4 mb-sm-0">
          <h2>FREE SHIPPING</h2>
          <h6>Free shipping worldwide</h6>
        </div>

        <div className="col-12 col-sm-4 mb-4 mb-sm-0">
          <h2>24 X 7 SERVICE</h2>
          <h6>Free shipping worldwide</h6>
        </div>

        <div className="col-12 col-sm-4">
          <h2>FESTIVAL OFFER</h2>
          <h6>Free shipping worldwide</h6>
        </div>
      </div>
      <div className="email-container d-sm-flex justify-content-between">
        <div className="title-container mb-4">
          <h2>LET'S BE FRIENDS!</h2>
          <h6>Nisi nisi tempor consequat loboris nisi.</h6>
        </div>
        <form className="input-container row">
          <input
            className="col-12 col-sm-8"
            type="email"
            id="email"
            placeholder="Enter your email address"
          />
          <button className="col-12 col-sm-4" type="submit" id="submit-btn">
            Subcribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtherInfomation;
