import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../store/index";

import useHttp from "../../hooks/use-http";
import Backdrop from "./Backdrop";
import Popup from "./Popup";
import ProductItem from "../UI/ProductItem";

const TrendingProducts = () => {
  const [productsData, setProductsData] = useState([]);

  const { sendRequest: fetchProductsData } = useHttp();

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
  const popupIsOpen = useSelector((state) => state.popup.popupIsOpen);

  const openDetailPopupHandler = (event) => {
    const [selectedProduct] = productsData.filter(
      (product) => product._id.$oid === event.target.dataset.productId
    );
    dispatch(popupActions.showPopup(selectedProduct));
    // console.log(event.target.dataset.productId);
    // console.log(selectedProduct);
  };

  //render danh sách các sản phẩm
  const allProducts = productsData.map((product) => {
    return (
      <ProductItem
        key={product._id.$oid}
        productData={product}
        onFunctionHandler={openDetailPopupHandler}
      />
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
