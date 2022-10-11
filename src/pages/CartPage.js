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

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listCart = useSelector((state) => state.listCart.products);
  useEffect(() => {
    //kiểm tra hiện tại có tài khoản nào đăng nhập hay không - Nếu không thì chuyển hướng sang trang Login
    const loginStatus = localStorage.getItem("loginData");
    if (!loginStatus) {
      navigate("/login");
    }

    const storedListCart = localStorage.getItem("listCart");
    if (storedListCart) {
      const transformStoredListCart = JSON.parse(storedListCart);
      dispatch(addListCartActions.updateCart(transformStoredListCart));
    }
  }, []);
  console.log(listCart);

  let totalPrice = 0;
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
    dispatch(addListCartActions.deleteCart(itemID));
  };
  //NẾU CÓ HÀNG ĐƯỢC THÊM VÀO GIỎ HÀNG THÌ HIỂN THỊ BẢNG THỐNG KÊ SẢN PHẨM
  //////////////////////////////////////////////////////////////////////////
  if (listCart.length > 0) {
    cartRow = listCart.map((data) => {
      const priceProduct = data.price * Number(data.quanity);
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
            <h6>{`${data.price
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND`}</h6>
          </td>
          <td>
            <AiFillCaretLeft data-id={data.id} />
            <span className="quantity mx-2">{data.quanity}</span>
            <AiFillCaretRight data-id={data.id} />
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
    </div>
  );
};
export default CartPage;
