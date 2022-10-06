import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "./../../hooks/use-http";

import ProductItem from "../UI/ProductItem";

const ProductList = () => {
  const [productsData, setProductsData] = useState([]);
  const [category, setCategory] = useState("all");
  const { sendRequest: fetchProductsData } = useHttp();
  const navigate = useNavigate();

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
  // console.log(productsData);

  const navigateToDetailPageHandler = (event) => {
    const productId = event.target.dataset.productId;
    console.log(productId);
    navigate(`/shop/${productId}`);
  };

  let listProducts = productsData.map((product) => {
    return (
      <ProductItem
        key={product._id.$oid}
        animation={true}
        col3={true}
        productData={product}
        onFunctionHandler={navigateToDetailPageHandler}
      />
    );
  });

  if (category !== "all") {
    listProducts = productsData
      .filter((product) => product.category === category)
      .map((product) => {
        return (
          <ProductItem
            key={product._id.$oid}
            animation={true}
            col3={true}
            productData={product}
            onFunctionHandler={navigateToDetailPageHandler}
          />
        );
      });
  }

  const selectListHandler = (event) => {
    // console.log(event.target.innerText);
    const selectedCategory = event.target.innerText.toLowerCase();
    if (event.target.localName === "li") {
      console.log(event.target.innerText);
      setCategory(selectedCategory);
    }
  };

  return (
    <div className="productlist-container my-5 row">
      <div className="categories-container col-12 col-md-3">
        <div className="categories">
          <h2>CATEGORIES</h2>
          <div className="categories-title mt-4" onClick={selectListHandler}>
            <h3>APPLE</h3>
            <ul>
              <li>All</li>
            </ul>
            <h3>IPHONE & MAC</h3>
            <ul>
              <li>IPhone</li>
              <li>IPad</li>
              <li>Macbook</li>
            </ul>

            <h3>WIRELESS</h3>
            <ul>
              <li>Airpod</li>
              <li>Watch</li>
            </ul>
            <h3>OTHER</h3>
            <ul>
              <li>Mouse</li>
              <li>Keyboard</li>
              <li>Other</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="products-container col-12 col-md-9">
        <div className="tool-container d-sm-flex justify-content-between">
          <input type="text" placeholder="Enter Search Here!" />
          <select>
            <option>Default sorting</option>
            <option>Ascending Price</option>
            <option>Descending Price</option>
          </select>
        </div>
        <div className="products-container row">{listProducts}</div>
      </div>
    </div>
  );
};

export default ProductList;
