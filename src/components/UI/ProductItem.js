/*
props.col3=true - Hiển thị 3 item/1 màn hình rộng
props.col3=false - Hiển thị 4 item/1 màn hình rộng
props.list =true - Hiển thị items theo danh sách ngang 
props.productData - Obj chứa data của product
props.onFunctionHandler - Hàm thực thi khi click vào Img 
props.animation=true - Hiển thị animation fade in khi phần tử được hiển thị
*/
const ProductItem = (props) => {
  const product = props.productData;

  return (
    <div
      className={`card ${props.animation ? "animations" : ""} mt-3 ${
        props.col3 ? "col-12 col-sm-4" : "col-12 col-sm-3"
      }  ${props.list ? "list float-sm-start" : ""}`}
    >
      <img
        className="img-product card-img-top"
        src={product.img1}
        alt={product.name}
        width="100%"
        height="100%"
        data-product-id={product._id.$oid}
        // data-product-id dùng để tạo 1 đối tượng có thuộc tính productId trong thuộc tính dataset của target
        onClick={props.onFunctionHandler}
      />
      <div className="product-info card-body">
        <h5>{product.name}</h5>
        <h6>
          {`${product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND`}

          {/* .toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") dùng để biến đổi 1 số thành 1 string có dấu . phân cách giữa các đơn vị. Ví dụ 1000 -> 1.000
        Link:https://blog.abelotech.com/posts/number-currency-formatting-javascript/  */}
        </h6>
      </div>
    </div>
  );
};

export default ProductItem;
