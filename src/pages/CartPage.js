//HIỆN TẠI: LOGOUT LÀ SẼ XÓA HẾT DATA CỦA CART
//=> VỀ SAU CÓ THGIAN THÌ SẼ LÀM CHỨC NĂNG LƯU CART THEO TỪNG LOGIN USER

import React, { useEffect } from "react";
import { addListCartActions } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { FaGift } from "react-icons/fa";
import ReactDOM from "react-dom";
import LiveChatIcon from "../components/UI/LiveChatIcon";
import LiveChatBox from "./../components/UI/LiveChatBox";

const CartPage = () => {
  const isOpenLiveChat = useSelector((state) => state.liveChat.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listCart = useSelector((state) => state.listCart.products);
  useEffect(() => {
    const storedListCart = localStorage.getItem("listCart");
    if (storedListCart) {
      const transformStoredListCart = JSON.parse(storedListCart);
      dispatch(addListCartActions.updateCart(transformStoredListCart));
    }
  }, []);
  console.log(listCart);

  let cartRow = <div></div>;
  let shoppingCartBody = <div></div>;

  const navigateToShopPageHandler = () => {
    navigate("/shop");
  };

  const navigateToCheckoutPageHandler = () => {
    navigate("/checkout");
  };

  const deleteItemHandler = (event) => {
    const itemID = event.target.dataset.id;
    console.log(itemID);
    dispatch(addListCartActions.deleteCart(itemID));
  };

  const increaseQuantityHandler = (event) => {
    const itemID = event.target.dataset.id;
    console.log(itemID);
    //nếu click vào thẻ svg => dataset.id có giá trị
    //nếu click vào thẻ path => dataset.id = undefined => không thực thi
    if (!itemID) return;

    //listCart đã bị freeze - tức là read only, không thể gán lại các giá trị
    //=> Tạo 1 bản shallow copy của listCart(*). Vì đây chỉ là bản shallow copy, nên các obj là các phần tử của mảng vẫn bị freeze => Tạo bản shallow coppy của obj cần thay đổi giá trị (**)->thay đổi giá trị ở bản shallow coppy (***)-> xóa obj đó ra khỏi mảng (****) rồi thêm lại bản shallow coppy đã thay đổi giá trị vào (*****)
    let listCartCopy = [...listCart]; //(*)
    let itemIndex; //index của phần tử cần tăng quantity

    const searchItem = listCart.find((item, index) => {
      itemIndex = index;
      // trong trường hợp cải tiến chức năng: lưu sản phẩm theo tài khoản thì cần bổ sung thêm điều kiện cho lệnh return bên dưới
      return item.id === itemID;
    });

    //tạo bản shallow copy của obj
    let itemCopy = { ...listCartCopy[itemIndex] }; //(**)

    if (listCart[itemIndex].quantity > 9) return; //max quantity =10. Nếu > 10 thì thoát khỏi hàm
    const quantity = itemCopy.quantity;
    itemCopy.quantity = quantity + 1; //(***)

    listCartCopy.splice(itemIndex, 1); //(****)
    listCartCopy.splice(itemIndex, 0, itemCopy); //(*****)-thêm phần tử mới vào chính vị trị của phần tử cũ đã bị xóa
    dispatch(addListCartActions.updateCart(listCartCopy));

    // //lưu vào local storage
    const dataJSON = JSON.stringify(listCartCopy);
    localStorage.setItem("listCart", dataJSON);

    console.log(listCartCopy);
  };

  const decreaseQuantityHandler = (event) => {
    const itemID = event.target.dataset.id;
    // console.log(itemID);

    if (!itemID) return;
    let listCartCopy = [...listCart];
    let itemIndex;

    const searchItem = listCart.find((item, index) => {
      itemIndex = index;
      // trong trường hợp cải tiến chức năng: lưu sản phẩm theo tài khoản thì cần bổ sung thêm điều kiện cho lệnh return bên dưới
      return item.id === itemID;
    });

    let itemCopy = { ...listCartCopy[itemIndex] };

    // if (listCart[itemIndex].quantity > 9) return; //min quantity = 0.
    const quantity = itemCopy.quantity;
    itemCopy.quantity = quantity - 1;

    if (itemCopy.quantity === 0) {
      //nếu quantity = 0 thì xóa hẳn item ra khỏi mảng - tức xóa hàng dữ liệu của item ra khỏi cart table
      listCartCopy.splice(itemIndex, 1);
    } else {
      //nếu quantity > 0 thì cập nhật item bằng item có giá trị quantity mới
      listCartCopy.splice(itemIndex, 1);
      listCartCopy.splice(itemIndex, 0, itemCopy);
    }

    dispatch(addListCartActions.updateCart(listCartCopy));

    // //lưu vào local storage
    const dataJSON = JSON.stringify(listCartCopy);
    localStorage.setItem("listCart", dataJSON);

    console.log(listCartCopy);
  };
  //NẾU CÓ HÀNG ĐƯỢC THÊM VÀO GIỎ HÀNG THÌ HIỂN THỊ BẢNG THỐNG KÊ SẢN PHẨM
  //////////////////////////////////////////////////////////////////////////
  if (listCart.length > 0) {
    let totalPrice = 0;
    cartRow = listCart.map((data) => {
      const priceProduct = data.price * data.quantity;
      totalPrice = totalPrice + priceProduct;
      return (
        <tr key={data.id}>
          <td>
            <img src={data.img} alt={data.name} width="60rem" height="75rem" />
          </td>
          <td>
            <h5>{data.name}</h5>
          </td>
          <td>
            <h6>{`${data.price.replace(
              /(\d)(?=(\d{3})+(?!\d))/g,
              "$1."
            )} VND`}</h6>
          </td>
          <td>
            <AiFillCaretLeft
              data-id={data.id}
              onClick={decreaseQuantityHandler}
            />
            <span className="quantity-container mx-2">{data.quantity}</span>
            <AiFillCaretRight
              data-id={data.id}
              onClick={increaseQuantityHandler}
            />
          </td>
          <td>
            <h6>{`${priceProduct
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND`}</h6>
          </td>
          <td>
            <RiDeleteBinLine data-id={data.id} onClick={deleteItemHandler} />
          </td>
        </tr>
      );
    });

    shoppingCartBody = (
      <div className="shoppingcart-container row">
        <div className="col-12 col-lg-9">
          <table>
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>{cartRow}</tbody>
          </table>
          <div className="button-container d-flex justify-content-between mt-5">
            <button
              className="shopping-btn ms-4"
              onClick={navigateToShopPageHandler}
            >
              <ImArrowLeft2 className="me-2" />
              Continue shopping
            </button>
            <button
              className="checkout-btn me-4"
              onClick={navigateToCheckoutPageHandler}
            >
              Proceed to checkout <ImArrowRight2 className="ms-2" />
            </button>
          </div>
        </div>

        <div className="cart-total col-12 col-lg-3">
          <div className="box text-start">
            <h3 className="my-3">CART TOTAL</h3>
            <div className="subtotal d-flex justify-content-between">
              <h4 className="fw-bold text-dark">SUBTOTAL</h4>
              <h6>{`${totalPrice
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND`}</h6>
            </div>
            <div className="d-flex justify-content-between my-3">
              <h4 className="fw-bold text-dark">TOTAL</h4>
              <h4 className="fw-bold">{`${totalPrice
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND`}</h4>
            </div>
            <form className="coupon-box text-center">
              <input type="text" placeholder="Enter your coupon" />
              <button type="submit">
                <FaGift /> Apply coupon
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    //NẾU GIỎ HÀNG TRỐNG THÌ THÔNG BÁO CHƯA CÓ SP ĐƯỢC THÊM VÀO GIỎ HÀNG
    //////////////////////////////////////////////////////////////////////////
    shoppingCartBody = <p>No products have been added to the cart yet.</p>;
  }

  return (
    <div className="cartpage-container">
      <div className="brand-container d-flex justify-content-between align-items-center">
        <h1 className="ms-5">CART</h1>
        <h4 className="me-5">CART</h4>
      </div>
      <h3 className="text-start mb-4 mt-5">SHOPPING CART</h3>
      {shoppingCartBody}
      <LiveChatIcon />
      {isOpenLiveChat &&
        ReactDOM.createPortal(
          <LiveChatBox />,
          document.getElementById("popup-root")
        )}
    </div>
  );
};
export default CartPage;
