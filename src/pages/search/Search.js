import React from "react";
import NavBarItem from "../UI/NavBarItem";
import Form from "../UI/FormComponent";
import Footer from "../UI/FooterComponent";
import "./Search.css";

//SEARCHPOPUP COMPONENT
////////////////////////////////
const SearchPopup = (props) => {
  return (
    <div className="col-12 col-sm-3 mr-3">
      <div className="container_search_popup_info p-4 mb-4">
        <h4 className="search_title row">Search</h4>
        <div className="row">
          <div className="col-12 p-0 pt-2 mb-2 text-dark">
            <strong>Destination</strong>
          </div>
          <div className="col-12 box_container p-2">
            <strong>{props.searchData.hotel}</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0 pt-3 mb-2 text-dark">
            <strong>Check-in Date</strong>
          </div>
          <div className="col-12 box_container p-2">
            <strong>{props.searchData.date}</strong>
          </div>
        </div>

        <p className="row pt-2 mb-1 pt-3 mb-2 text-dark">
          <strong>Options</strong>
        </p>
        <div className="row mt-1 mb-1">
          <div className="col-12 col-sm-8">
            Min price <span className="small_text">per night</span>
          </div>
          <div className="col-12 col-sm-4 number_box empty"></div>
        </div>
        <div className="row mt-1 mb-1">
          <div className="col-12 col-sm-8">
            Max price <span className="small_text">per night</span>
          </div>
          <div className="col-12 col-sm-4 number_box empty"></div>
        </div>
        <div className="row mt-1 mb-1">
          <div className="col-12 col-sm-8">Adult</div>
          <div className="col-12 col-sm-4 number_box empty">
            <strong>{props.searchData.amountAdult}</strong>
          </div>
        </div>
        <div className="row  mt-1 mb-1">
          <div className="col-12 col-sm-8">Children</div>
          <div className="col-12 col-sm-4 number_box empty">
            <strong>{props.searchData.amountChildren}</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-8">Room</div>
          <div className="col-12 col-sm-4 number_box empty">
            <strong>{props.searchData.amountRoom}</strong>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center p-2 search_box">Search</div>
        </div>
      </div>
    </div>
  );
};

//SearchListItem COMPONENT
//////////////////////////
const SearchListItem = (props) => {
  const listItem = props.dataResult.map((data) => {
    return (
      <div className="row container_hotel_tag mb-4" key={data.name}>
        <div className="col-12 col-md-3 p-0">
          <img
            src={data.image_url}
            alt={data.name}
            className="m-2 "
            width="160"
            height="200px"
          />
        </div>
        <div className="col-12 col-md-9">
          <div className="row container_hotel_detail">
            <div className="col-8 room_info  small_text">
              <h4 className="text-primary mt-2">
                <b>{data.name}</b>
              </h4>
              <p>{data.distance} from center</p>
              <p className="tag_box">{data.tag}</p>
              <p>
                <b>{data.description}</b>
              </p>
              <p>{data.type}</p>
              {data.free_cancel && (
                <div className="text-success">
                  <p>
                    <b>Free cancellation</b>
                  </p>
                  <p>
                    You can cancel later, so lock in this great price today!
                  </p>
                </div>
              )}
            </div>
            <div className="col-4 room_rate">
              <div className="row mt-2">
                <div className="col-8 rate_text">{data.rate_text}</div>
                <div className="col-4 rate_box">
                  <div className=" rate_box ">{data.rate}</div>
                </div>
              </div>
              <div className="clearfix">
                <div className="title_price mt-5 float-md-right">
                  ${data.price}
                </div>
                <p className="title_fees mb-1 float-md-right">
                  Includes taxes and fees
                </p>

                <button
                  type="button"
                  className="btn btn-primary  float-md-right mb-2"
                >
                  <b>See availability</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{listItem}</div>;
};

//SEARCHLIST COMPONENT
//////////////////////////
const SearchList = (props) => {
  let searchResult;

  //LỌC KẾT QUẢ TÌM KIẾM THEO TÊN VÀ SỐ PHÒNG
  if (props.searchData.hotel === "Hotels Available") {
    searchResult = props.searchResultData;
  } else if (Number(props.searchData.amountRoom) === 1) {
    //trường hợp chọn 1 phòng
    searchResult = props.searchResultData.filter(
      (data) =>
        data.name
          .toLowerCase()
          .includes(props.searchData.hotel.toLowerCase()) &&
        data.size === "small"
    );
  } else if (Number(props.searchData.amountRoom) === 2) {
    //trường hợp chọn 2 phòng
    searchResult = props.searchResultData.filter(
      (data) =>
        data.name
          .toLowerCase()
          .includes(props.searchData.hotel.toLowerCase()) &&
        (data.size === "medium" || data.size === "big")
    );
  } else {
    //trường hợp chọn 3 phòng trở lên
    searchResult = props.searchResultData.filter(
      (data) =>
        data.name
          .toLowerCase()
          .includes(props.searchData.hotel.toLowerCase()) && data.size === "big"
    );
  }

  //RENDER
  return (
    <div className="col-12 col-sm-8">
      <SearchListItem dataResult={searchResult} />
    </div>
  );
};

///////////////////////////
//SEACH COMPONENT
////////////////////////////
const Search = (props) => {
  const searchInput = props.searchDataInput;

  //ĐẶT GIÁ TRỊ BAN ĐẦU CỦA TRƯỜNG Destination và Check-in Data NẾU USER K NHẬP 2 TRƯỜNG NÀY VÀO SEARCH INPUT
  if (!searchInput.hotel.trim()) searchInput.hotel = "Hotels Available"; //trim() dùng để loại bỏ khoảng trắng trc và sau string
  if (!searchInput.date) searchInput.date = new Date().toLocaleDateString(); // gán bằng thời gian hiện tại
  if (!searchInput.amountAdult) searchInput.amountAdult = 1;
  if (!searchInput.amountChildren) searchInput.amountChildren = 0;
  if (!searchInput.amountRoom || searchInput.amountRoom === "0")
    searchInput.amountRoom = 1;

  return (
    <div>
      <NavBarItem navBarItems={props.navBarItems} />
      <div className="container">
        <div className=" row contaier_2_component">
          <SearchPopup searchData={searchInput} />
          <SearchList
            searchData={searchInput}
            searchResultData={props.searchResult}
          />
        </div>
      </div>

      <Form />
      <Footer footerListData={props.footerList} />
    </div>
  );
};

export default Search;
