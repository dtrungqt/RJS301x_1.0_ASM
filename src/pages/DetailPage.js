import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductItem from "../components/UI/ProductItem";

import useHttp from "../hooks/use-http";

const DetailPage = () => {
  const [productDetailData, setProductDetailData] = useState([]);
  const [relatedProductData, setRelatedProductData] = useState([]);
  const params = useParams();
  const productId = params.productId;
  const { sendRequest: fetchProductDetailData } = useHttp();
  const navigate = useNavigate();

  useEffect(() => {
    const transformDataFn = (data) => {
      let index;
      const productDetail = data.find((product, i) => {
        index = i;
        return product._id.$oid === productId;
      }); //find trả về 1 obj
      setProductDetailData(productDetail);

      //loại bỏ productDetail ra khỏi mảng để relatedProduct không chứa productDetail
      data.splice(index, 1);
      const relatedProduct = data.filter(
        (product) => product.category === productDetail.category
      ); //finter trả về 1 array
      setRelatedProductData(relatedProduct);
    };

    fetchProductDetailData(
      {
        url: "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
      },
      transformDataFn
    );
  }, [fetchProductDetailData, productId]);

  // console.log(relatedProductData);
  const navigateToDetailPageHandler = (event) => {
    window.scrollTo(0, 0);
    const productId = event.target.dataset.productId;
    navigate(`/shop/${productId}`);
  };

  if (productDetailData.category) {
    const relatedProductList = relatedProductData.map((product) => {
      return (
        <ProductItem
          key={product._id.$oid}
          col3={false}
          list={true}
          productData={product}
          onFunctionHandler={navigateToDetailPageHandler}
        />
      );
    });

    return (
      <div className="detailpage-container my-5">
        <div className="maindetail-container row">
          <div className="col-12 col-md-6">
            <div className="row mt-5">
              <div className="col-4 d-flex flex-column">
                <img
                  src={productDetailData.img1}
                  alt={productDetailData.name}
                  width="50%"
                  height="30%"
                />
                <img
                  src={productDetailData.img2}
                  alt={productDetailData.name}
                  width="50%"
                  height="30%"
                />
                <img
                  src={productDetailData.img3}
                  alt={productDetailData.name}
                  width="50%"
                  height="30%"
                />
                <img
                  src={productDetailData.img4}
                  alt={productDetailData.name}
                  width="50%"
                  height="30%"
                />
              </div>
              <div className="col-8">
                <img
                  src={productDetailData.img1}
                  alt={productDetailData.name}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <h2>{productDetailData.name}</h2>
            <h4 className="my-4">{`${productDetailData.price
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND`}</h4>
            <p>{productDetailData.short_desc}</p>
            <h5 className="my-3">
              CATEGORY:
              <span className="ms-2">{productDetailData.category}</span>
            </h5>
            <div className="add-container d-sm-flex justify-center-content">
              <div className="quanity d-flex justify-center-content">
                <h5 className="m-0 me-2 align-self-center">QUANITY</h5>
                <input type="number" />
              </div>
              <button type="button">Add to cart</button>
            </div>
          </div>
        </div>

        <div className="description-container mt-5">
          <h3>PRODUCT DESCRIPTION</h3>
          <pre>{productDetailData.long_desc}</pre>
        </div>

        <div className="related-container clearfix">{relatedProductList}</div>
      </div>
    );
  }

  return <div>Loading</div>;
};
export default DetailPage;
