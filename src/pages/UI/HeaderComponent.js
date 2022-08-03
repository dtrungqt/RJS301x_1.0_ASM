import React, { useState } from "react";
import Card from "./CardComponent";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";
const Header = (props) => {
  //TẠO 3 STATE CHO 3 INPUT
  const [locationInput, setLocationInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [amountAdultInput, setAmountAdultInput] = useState("");
  const [amountChildrenInput, setAmountChildrenInput] = useState("");
  const [amountRoomInput, setAmountRoomInput] = useState("");

  //HÀM CẬP NHẬT STATE
  const locationChangeHandle = (event) => {
    setLocationInput(event.target.value);
  };
  const dateChangeHandle = (event) => {
    setDateInput(event.target.value);
  };
  const amountAdultChangeHandle = (event) => {
    setAmountAdultInput(event.target.value);
  };
  const amountChildrenChangeHandle = (event) => {
    setAmountChildrenInput(event.target.value);
  };
  const amountRoomChangeHandle = (event) => {
    setAmountRoomInput(`${event.target.value}`);
  };

  //HÀM XỬ LÝ KHI ẤN SEARCH
  const searchFormHandle = () => {
    const userInputData = {
      hotel: locationInput,
      date: dateInput,
      // date: new Date(dateInput), // truyền dateInput vào hàm Date, hàm Date sẽ chuyển dổi date string từ dateInput thành đối tượng date

      amountAdult: amountAdultInput,
      amountChildren: amountChildrenInput,
      amountRoom: amountRoomInput,
    };

    props.onGetSearcchData(userInputData);
    setLocationInput("");
    setDateInput("");
    setAmountAdultInput("");
    setAmountChildrenInput("");
    setAmountRoomInput("");
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
        <form className="row pr-1 form-info">
          <label className="col-3" htmlFor="location">
            <div className="row pt-1">
              <i className="fa fa-bed col-2  pt-1"></i>
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
          <label className="col-4" htmlFor="dateInput">
            <div className="row pt-1">
              <i className="fa fa-calendar col-2  pt-1"></i>
              <input
                type="date"
                id="dateInput"
                onChange={dateChangeHandle}
                value={dateInput}
                className="header-input_box col-9 pl-0"
                min="2022-01-01"
                max="2022-12-31"
              />
            </div>
          </label>

          <div className="col-3">
            <div className="row form_input_amount pt-1">
              <label className="col-4 p-0" htmlFor="amountAdultInput">
                {/* <div className="row pt-1"> */}
                <span className="fa fa-male pr-1 "></span>
                <input
                  type="text"
                  id="amountAdultInput"
                  onChange={amountAdultChangeHandle}
                  value={amountAdultInput}
                  className=" header-input_box input_adult  pl-0"
                  placeholder="1 adult"
                />
                {/* </div> */}
              </label>
              <label className="col-4 p-0" htmlFor="amountChildrenInput">
                {/* <div className="row pt-1"> */}
                <span className="fa p-0 pt-1 pr-1">•</span>
                <input
                  type="text"
                  id="amountChildrenInput"
                  onChange={amountChildrenChangeHandle}
                  value={amountChildrenInput}
                  className=" header-input_box input_children pl-0"
                  placeholder="0 children"
                />
                {/* </div> */}
              </label>
              <label className="col-4 p-0" htmlFor="amountRoomInput">
                {/* <div className="row pt-1"> */}
                <span className="fa p-0 pt-1 pr-1">•</span>
                <input
                  type="text"
                  id="amountRoomInput"
                  onChange={amountRoomChangeHandle}
                  value={amountRoomInput}
                  className=" header-input_box input_room pl-0"
                  placeholder="1 room"
                />
                {/* </div> */}
              </label>
            </div>
          </div>
          {/* <label className="col-1" htmlFor="amountAdultInput">
            <div className="row pt-1">
              <span className="fa fa-male col-1  pt-1"></span>
              <input
                type="text"
                id="amountAdultInput"
                onChange={amountChangeHandle}
                value={amountInput}
                className=" header-input_box col-8 pl-0"
                placeholder="1 adult"
              />
            </div>
          </label>
          <label className="col-1" htmlFor="amountChildrenInput">
            <div className="row pt-1">
              <span className="fa col-1 p-0 pt-1">•</span>
              <input
                type="text"
                id="amountChildrenInput"
                onChange={amountChangeHandle}
                value={amountInput}
                className=" header-input_box col-8 pl-0"
                placeholder="1 children"
              />
            </div>
          </label>
          <label className="col-1" htmlFor="amountRoomInput">
            <div className="row pt-1">
              <span className="fa col-1 p-0 pt-1">•</span>
              <input
                type="text"
                id="amountRoomInput"
                onChange={amountChangeHandle}
                value={amountInput}
                className=" header-input_box col-8 pl-0"
                placeholder="1 room"
              />
            </div>
          </label> */}
          <Link to="/search" className=" col-2 ">
            <button
              type="button"
              onClick={searchFormHandle}
              className="btn btn-primary text-white ml-3"
            >
              Search
            </button>
          </Link>
        </form>
      </div>
    </Card>
  );
};
export default Header;
