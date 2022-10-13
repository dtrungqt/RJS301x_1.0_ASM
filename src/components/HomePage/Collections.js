import { Link, useNavigate } from "react-router-dom";

const Collections = () => {
  const navigate = useNavigate();
  const navigateToShopPageHandler = () => {
    window.scrollTo(0, 0);
    navigate("/shop");
  };
  return (
    <div className="collections-container">
      <div className="collections-title">
        <h4>CAREFULLY CREATED COLLECTIONS</h4>
        <h2>BROWSE OUR CATEGORIES</h2>
      </div>

      <div className="collections-images row">
        <div className="link-cursor collection-img col-6 mt-3">
          <img
            src={process.env.PUBLIC_URL + "/images/product_1.png"}
            alt="product 1"
            width="100%"
            height="100%"
            onClick={navigateToShopPageHandler}
          />
        </div>
        <div className="link-cursor collection-img col-6 mt-3">
          <img
            src={process.env.PUBLIC_URL + "/images/product_2.png"}
            alt="product 2"
            width="100%"
            height="100%"
            onClick={navigateToShopPageHandler}
          />
        </div>
      </div>

      <div className="collections-images row">
        <div className="link-cursor collection-img col-4 mt-3">
          <img
            src={process.env.PUBLIC_URL + "/images/product_3.png"}
            alt="product 3"
            width="100%"
            height="100%"
            onClick={navigateToShopPageHandler}
          />
        </div>
        <div className="link-cursor collection-img col-4 mt-3">
          <img
            src={process.env.PUBLIC_URL + "/images/product_4.png"}
            alt="product 4"
            width="100%"
            height="100%"
            onClick={navigateToShopPageHandler}
          />
        </div>
        <div className="link-cursor collection-img col-4 mt-3">
          <img
            src={process.env.PUBLIC_URL + "/images/product_5.png"}
            alt="product 5"
            width="100%"
            height="100%"
            onClick={navigateToShopPageHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Collections;
