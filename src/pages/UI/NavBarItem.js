import React from "react";
import "./NavBarItem.css";
import Card from "./CardComponent";

const NavBarItem = (props) => {
  const navBarList = props.navBarItems.map((item) => {
    return (
      <li className="nav-item mr-4" key={item.type}>
        <a className={`nav-link ${item.active && "nav-item-border"}`} href="/">
          <i className={`fa ${item.icon}`}></i> {item.type}
        </a>
      </li>
    );
  });

  return (
    <Card className="pb-5">
      <div className="container pt-3">
        {/* header  */}
        <div className="row">
          <h5 className="col-12 col-md-6">Booking Website</h5>
          <div className="col-12 offset-md-3 col-md-3 ">
            <button className="btn text-button-nav p-1 ">Register</button>
            <button className="btn text-button-nav p-1 ml-3">Login</button>
          </div>
        </div>
        {/* navbar  */}
        <div className="row">
          <div className="navbar navbar-expand-sm navbar-color">
            <ul className="navbar-nav">{navBarList}</ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NavBarItem;
