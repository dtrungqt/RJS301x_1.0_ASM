import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-info">
        <h4>NEW INSPIRATION 2020</h4>
        <h1>20% OFF ON NEW SEASON</h1>
        <button>
          <Link to="/shop" className="link">
            Browse collections
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
