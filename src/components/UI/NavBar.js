import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const NavBar = () => {
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
  return (
    // <div className="navbar-container d-flex justify-content-between">
    <div className="navbar-container row">
      <ul className="col-4 align-self-center">
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

      <div className="brand-name col-4 align-self-center">
        <div onClick={navigateToHomeHandler} className="navlink">
          BOUTIQUE
        </div>
      </div>

      <ul className="col-4 d-md-flex justify-content-end align-self-center">
        <li>
          <div className="navlink" onClick={navigateToCartHandler}>
            <FaShoppingCart />
            Cart
          </div>
        </li>
        <li>
          <div className="navlink" onClick={navigateToLoginHandler}>
            <FaUser />
            Login
          </div>
        </li>
        <li>
          <p className="navlink">(Logout)</p>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
