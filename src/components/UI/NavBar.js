//HIỆN TẠI: LOGOUT LÀ SẼ XÓA HẾT DATA CỦA CART
//=> VỀ SAU CÓ THGIAN THÌ SẼ LÀM CHỨC NĂNG LƯU CART THEO TỪNG LOGIN USER
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { loginStatusActions } from "../../store";
import { addListCartActions } from "../../store";

const NavBar = () => {
  let loginStatus = localStorage.getItem("loginData");
  let loginUser = {};
  if (loginStatus) {
    loginUser = JSON.parse(loginStatus);
  }
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.loginStatus.isLogin);
  useEffect(() => {
    if (loginStatus) {
      dispatch(loginStatusActions.onLogin());
    }
  }, [dispatch, loginStatus]);
  console.log(isLogin);
  console.log(loginUser);

  const navigate = useNavigate();

  const navigateToHomeHandler = () => {
    navigate("/");
  };

  const navigateToLoginHandler = () => {
    navigate("/login");
  };

  const navigateToCartHandler = () => {
    navigate("/cart");
  };

  const logoutHandler = () => {
    dispatch(loginStatusActions.onLogout());
    localStorage.removeItem("loginData");
    localStorage.removeItem("listCart");
    dispatch(addListCartActions.updateCart([])); //xóa data listCart trong mảng products của listCartSlice để CartPage re-render lại
    navigate("/");
  };
  return (
    // <div className="navbar-container d-flex justify-content-between">
    <div className="navbar-container row">
      <ul className="col-12 col-sm-6 col-md-4 align-self-center">
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? "active navlink" : "navlink"
            }
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? "active navlink" : "navlink"
            }
            to="/shop"
          >
            Shop
          </NavLink>
        </li>
      </ul>

      <div className="brand-name col-12 col-sm-2  col-md-4  d-none d-md-block align-self-center">
        <div onClick={navigateToHomeHandler} className="navlink">
          BOUTIQUE
        </div>
      </div>

      <ul className="col-12 col-sm-6 col-md-4 d-md-flex justify-content-end align-self-center">
        <li>
          <div className="navlink" onClick={navigateToCartHandler}>
            <FaShoppingCart />
            Cart
          </div>
        </li>
        <li>
          {/* <div className="navlink" onClick={navigateToLoginHandler}>
            <FaUser />
            {`${isLogin ? `${loginUser.name}` : "Login"}`}
          </div> */}
          {isLogin && (
            <div className="navlink">
              <FaUser />
              {loginUser.name}
            </div>
          )}
          {!isLogin && (
            <div className="navlink" onClick={navigateToLoginHandler}>
              <FaUser />
              Login
            </div>
          )}
        </li>
        <li>
          {isLogin && (
            <p className="navlink m-0" onClick={logoutHandler}>
              (Logout)
            </p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
