import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../store/index";

import useHttp from "../../hooks/use-http";
import Backdrop from "./Backdrop";
import Popup from "./Popup";

const TrendingProducts = () => {
  const [productsData, setProductsData] = useState([]);

  const { sendRequest: fetchProductsData } = useHttp();

  // const [popupIsOpen, setPopupIsOpen] = useState(false);

  useEffect(() => {
    const transformDataFn = (data) => {
      setProductsData(data);
    };

    fetchProductsData(
      {
        url: "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
      },
      transformDataFn
    );
  }, [fetchProductsData]);
  console.log(productsData);

  const dispatch = useDispatch();
  const popupIsOpen = useSelector((state) => state.popupIsOpen);

  const openDetailModalHandler = () => {
    // setPopupIsOpen((prevState) => !prevState);
    dispatch(popupActions.showPopup());
  };

  //render danh sách các sản phẩm
  const allProducts = productsData.map((product) => {
    return (
      <div className="card col-12 col-sm-3 mt-3" key={product._id.$oid}>
        <img
          className="img-product card-img-top"
          src={product.img1}
          alt={product.name}
          width="100%"
          height="100%"
          onClick={openDetailModalHandler}
        />
        <div className="product-info card-body">
          <h5>{product.name}</h5>
          <h6>
            {`${product.price
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND`}
            {/* .toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") dùng để biến đổi 1 số thành 1 string có dấu . phân cách giữa các đơn vị. Ví dụ 1000 -> 1.000
            Link:https://blog.abelotech.com/posts/number-currency-formatting-javascript/  */}
          </h6>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="trending-container">
        <div className="trending-title">
          <h4>MADE THE HARD WAY</h4>
          <h2>TOP TRENDING PRODCUTS</h2>
        </div>
        <div className="products-container row">{allProducts}</div>
      </div>

      {popupIsOpen &&
        ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById("backdrop-root")
        )}

      {popupIsOpen &&
        ReactDOM.createPortal(<Popup />, document.getElementById("popup-root"))}
    </React.Fragment>
  );
};

export default TrendingProducts;
