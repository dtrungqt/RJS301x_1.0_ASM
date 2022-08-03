import React, { useState } from "react";
import Card from "./CardComponent";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";
const Header = () => {
  //TẠO 3 STATE CHO 3 INPUT
  const [locationInput, setLocationInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [amountInput, setAmountInput] = useState("");

  //HÀM CẬP NHẬT STATE
  const locationChangeHandle = (event) => {
    setLocationInput(event.target.value);
  };
  const dateChangeHandle = (event) => {
    setDateInput(event.target.value);
  };
  const amountChangeHandle = (event) => {
    setAmountInput(event.target.value);
  };

  //HÀM XỬ LÝ KHI ẤN SEARCH
  const submitFormHandle = () => {
    // window.location.replace("http://localhost:3000/search");
  };

  return (
    <Card className="header-container">
      <div className="container pt-5 header-height">
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          Get reward for your travals - unlock instant savings of 10% or more
          with a free account
        </p>
        <button type="button" className="btn text-white btn-primary">
          Sign in / Register
        </button>
      </div>
      <div className="container header-input">
        <form className="row pr-1 form-info" onSubmit={submitFormHandle}>
          <label className="col-3" htmlFor="location">
            <div className="row pt-1">
              <i className="fa fa-bed col-2"></i>
              <input
                type="text"
                id="location"
                name="location"
                onChange={locationChangeHandle}
                value={locationInput}
                className=" header-input_box col-8 pl-0"
                // className="col-3 header-input_box"
                placeholder="Where are you going?"
              />
            </div>
          </label>
          <label className="col-3" htmlFor="dateInput">
            <div className="row pt-1">
              <i className="fa fa-calendar col-2"></i>
              <input
                type="date"
                id="dateInput"
                onChange={dateChangeHandle}
                value={dateInput}
                className="header-input_box col-8 pl-0"
                min="2022-01-01"
                max="2022-12-31"
              />
            </div>
          </label>
          <label className="col-4" htmlFor="amountInput">
            <div className="row pt-1">
              <i className="fa fa-male col-2"></i>
              <input
                type="text"
                id="amountInput"
                onChange={amountChangeHandle}
                value={amountInput}
                className=" header-input_box col-9 pl-0"
                placeholder="Select number"
              />
            </div>
          </label>
          <Link to="/search" className="col-2">
            <button type="submit" className="btn btn-primary text-white ml-3">
              Search
            </button>
          </Link>
        </form>
      </div>
    </Card>
  );
};
export default Header;
