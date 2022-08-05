import React, { useState } from "react";
import Card from "./CardComponent";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";
//import React-date-rage library
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

const Header = (props) => {
  //TẠO STATE CHO INPUT
  const [locationInput, setLocationInput] = useState("");
  const [amountAdultInput, setAmountAdultInput] = useState("");
  const [amountChildrenInput, setAmountChildrenInput] = useState("");
  const [amountRoomInput, setAmountRoomInput] = useState("");

  //state sử dụng cho DateRange Component
  const [dateInput, setDateInput] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  //state để quyết định hiển thị model DateRage -true: hiển thị, false: ẩn
  const [dateRange, setDateRange] = useState(false);

  //HÀM CẬP NHẬT STATE
  const locationChangeHandle = (event) => {
    setLocationInput(event.target.value);
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

  //Hàm cập nhật giá trị dateRange để quyết định ẩn hay hiện DateRangeComponent
  const openDateRangeHandle = (event) => {
    setDateRange((prevState) => !prevState);
  };

  //hàm đóng cửa sổ DateRange Component bằng cách nhấn nút ESC
  const hiddenDateRangeHandle = (event) => {
    if (event.key === "Escape") setDateRange(false);
  };

  //Hiển thị ngày tháng được chọn ở DateRange
  const dateChoose = `${dateInput[0].startDate.toLocaleDateString()} ${
    dateInput[0].endDate
      ? `to ${dateInput[0].endDate.toLocaleDateString()}`
      : ""
  }`;

  //HÀM XỬ LÝ KHI ẤN SEARCH
  const searchFormHandle = () => {
    const userInputData = {
      hotel: locationInput,
      date: dateChoose,
      amountAdult: amountAdultInput,
      amountChildren: amountChildrenInput,
      amountRoom: amountRoomInput,
    };

    props.onGetSearcchData(userInputData);
    setLocationInput("");
    setAmountAdultInput("");
    setAmountChildrenInput("");
    setAmountRoomInput("");
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0); //cuộn lên đầu trang
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
                placeholder="Where are you going?"
              />
            </div>
          </label>

          {/* HIEN THI LICH  */}
          <label className="col-4" htmlFor="dateInput">
            <div className="row pt-1" onClick={openDateRangeHandle}>
              <i className="fa fa-calendar col-2  pt-1"></i>
              <div className="text-muted">{dateChoose}</div>
            </div>
          </label>
          <div className="col-3">
            <div className="row form_input_amount pt-1">
              <label className="col-4 p-0" htmlFor="amountAdultInput">
                <span className="fa fa-male pr-1 "></span>
                <input
                  type="text"
                  id="amountAdultInput"
                  onChange={amountAdultChangeHandle}
                  value={amountAdultInput}
                  className=" header-input_box input_adult  pl-0"
                  placeholder="1 adult"
                />
              </label>

              <label className="col-4 p-0" htmlFor="amountChildrenInput">
                <span className="fa p-0 pt-1 pr-1">•</span>
                <input
                  type="text"
                  id="amountChildrenInput"
                  onChange={amountChildrenChangeHandle}
                  value={amountChildrenInput}
                  className=" header-input_box input_children pl-0"
                  placeholder="0 children"
                />
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
              </label>
            </div>
          </div>

          {/* VẤN ĐỀ: KHI SỬ DỤNG LINK ĐỂ MỞ TRANG MỚI, TRANG MỚI ĐƯỢC MỞ RA NHƯNG KHÔNG NẰM Ở ĐẦU TRANG => TẠO HÀM scrollToTop ĐỂ TRANG MỞ RA LUÔN NẰM Ở ĐẦU TRANG  */}
          <Link to="/search" onClick={scrollToTop} className=" col-2 ">
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

      {/* dataRange là true (khi bấm vào icon lịch) thì hiển thị, false thì ẩn DataRange Component  */}
      <div
        className={`date_range_position ${dateRange && "date_range_display"}`}
        onKeyDown={hiddenDateRangeHandle}
      >
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDateInput([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateInput}
        />
      </div>
    </Card>
  );
};
export default Header;
