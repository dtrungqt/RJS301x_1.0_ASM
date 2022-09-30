const ProductList = () => {
  return (
    <div className="productlist-container row">
      <div className="categories-container col-12 col-md-3">
        <div className="categories">
          <h2>CATEGORIES</h2>
          <div className="categories-title">
            <h3>APPLE</h3>
            <h4>All</h4>
            <h3>IPHONE & MAC</h3>
            <h4>IPhone</h4>
            <h4>IPod</h4>
            <h4>Macbook</h4>
            <h3>WIRELESS</h3>
            <h4>Airpod</h4>
            <h4>Watch</h4>
            <h3>OTHER</h3>
            <h4>Mouse</h4>
            <h4>Keyboard</h4>
            <h4>Other</h4>
          </div>
        </div>
      </div>
      <div className="products-container col-12 col-md-9">
        <div className="tool-container">
          <input type="text" placeholder="Enter Search Here!" />
          <select>
            <option>Default sorting</option>
            <option>Ascending Price</option>
            <option>Descending Price</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
