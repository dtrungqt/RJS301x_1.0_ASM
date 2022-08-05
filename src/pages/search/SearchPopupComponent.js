import React, { useState } from "react";

//HIỂN THỊ HỘP SEARCH BÊN TRÁI
////////////////////////////////
const SearchPopup = (props) => {
  //Tạo State để truyền lại data cho Search Component
  const [searchInputFromSearch, setSearchInputFromSearch] = useState(
    props.searchData
  );
  // console.log(searchInputFromSearch);
  //HÀM CẬP NHẬT STATE
  const destinationChangeHandle = (event) => {
    setSearchInputFromSearch((prevState) => {
      return { ...prevState, hotel: event.target.value };
    });
  };

  const minPriceChangeHandle = (event) => {
    setSearchInputFromSearch((prevState) => {
      return { ...prevState, minPrice: event.target.value };
    });
  };

  const maxPriceChangeHandle = (event) => {
    setSearchInputFromSearch((prevState) => {
      return { ...prevState, maxPrice: event.target.value };
    });
  };

  const amountAdultChangeHandle = (event) => {
    setSearchInputFromSearch((prevState) => {
      return { ...prevState, amountAdult: event.target.value };
    });
  };
  const amountChildrenChangeHandle = (event) => {
    setSearchInputFromSearch((prevState) => {
      return { ...prevState, amountChildren: event.target.value };
    });
  };
  const amountRoomChangeHandle = (event) => {
    setSearchInputFromSearch((prevState) => {
      return { ...prevState, amountRoom: event.target.value };
    });
  };

  const searchHandle = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    props.onUpdateSearchInput(searchInputFromSearch);
  };

  return (
    <div className="col-12 col-sm-3 mr-3">
      <form onSubmit={searchHandle}>
        <div className="container_search_popup_info p-4 mb-4">
          <h4 className="search_title row">Search</h4>

          <div className="row">
            <label
              className="col-12 p-0 pt-2 mb-2 text-dark"
              htmlFor="destination"
            >
              <strong>Destination</strong>
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={searchInputFromSearch.hotel}
              onChange={destinationChangeHandle}
              className="col-12 box_container p-2"
            />
          </div>

          <div className="row">
            <div className="col-12 p-0 pt-3 mb-2 text-dark">
              <strong>Check-in Date</strong>
            </div>
            <div className="col-12 box_container p-2">
              <strong>{searchInputFromSearch.date}</strong>
            </div>
          </div>

          <p className="row pt-2 mb-1 pt-3 mb-2 text-dark">
            <strong>Options</strong>
          </p>

          <div className="row mt-1 mb-1">
            <label className="col-12 col-sm-8" htmlFor="minPrice">
              Min price <span className="small_text">per night</span>
            </label>
            <input
              type="text"
              id="minPrice"
              name="minPrice"
              value={searchInputFromSearch.minPrice}
              onChange={minPriceChangeHandle}
              className="col-12 col-sm-4 number_box empty"
            />
          </div>

          <div className="row mt-1 mb-1">
            <label className="col-12 col-sm-8" htmlFor="maxPrice">
              Max price <span className="small_text">per night</span>
            </label>
            <input
              type="text"
              id="maxPrice"
              name="maxPrice"
              value={searchInputFromSearch.maxPrice}
              onChange={maxPriceChangeHandle}
              className="col-12 col-sm-4 number_box empty"
            />
          </div>

          <div className="row mt-1 mb-1">
            <label className="col-12 col-sm-8" htmlFor="adult">
              Adult
            </label>
            <input
              type="text"
              id="adult"
              name="adult"
              value={searchInputFromSearch.amountAdult}
              onChange={amountAdultChangeHandle}
              className="col-12 col-sm-4 number_box empty"
            />
          </div>

          <div className="row  mt-1 mb-1">
            <label className="col-12 col-sm-8" htmlFor="children">
              Children
            </label>
            <input
              type="text"
              id="children"
              name="children"
              value={searchInputFromSearch.amountChildren}
              onChange={amountChildrenChangeHandle}
              className="col-12 col-sm-4 number_box empty"
            />
          </div>

          <div className="row">
            <label className="col-12 col-sm-8" htmlFor="room">
              Room
            </label>
            <input
              type="text"
              id="room"
              name="room"
              value={searchInputFromSearch.amountRoom}
              onChange={amountRoomChangeHandle}
              className="col-12 col-sm-4 number_box empty"
            />
          </div>

          <div className="row mt-4">
            <button type="submit" className="col-12 btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SearchPopup;
