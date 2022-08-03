import React from "react";
import "./NavBarItem.css";
import Card from "./CardComponent";
// import styles from "./NavBarItem.module.css";

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
    /*
    <div className={styles.navbar_container}>
      <div className={styles.navbar_container__title}>
        <h3 className={styles.navbar_title}>Booking Website</h3>
        <div className={styles.navbar_container__button}>
          <button className={styles.navbar_button}>Register</button>
          <button className={styles.navbar_button}>Login</button>
        </div>
      </div>
      <ul className={styles.navbar_list}>{navBarList}</ul>
    </div>
    */

    <Card>
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
