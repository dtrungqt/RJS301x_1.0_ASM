import ProductList from "../components/ShopPage/ProductList";

const ShopPage = () => {
  return (
    <div className="shoppage-container">
      <div className="brand-container d-flex justify-content-between align-items-center">
        <h1 className="ms-5">SHOP</h1>
        <h4 className="me-5">SHOP</h4>
      </div>
      <ProductList />
    </div>
  );
};
export default ShopPage;
