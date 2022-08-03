import React from "react";
import NavBarItem from "../UI/NavBarItem";
import Form from "../UI/FormComponent";
import Footer from "../UI/FooterComponent";
import "./Search.css";

//SEARCHPOPUP COMPONENT
////////////////////////////////
const SearchPopup = (props) => {
  return (
    <div className="container_search_popup col-12 col-sm-3">
      <div className="container_search_popup_info">
        <h4 className="search_title row">Search</h4>
        <div className="row">
          <div className="col-12 p-0 pt-2 mb-2 text-dark">
            <strong>Destination</strong>
          </div>
          <div className="col-12 box_container p-2">
            <strong>
              {props.searchData.hotel
                ? props.searchData.hotel
                : "Available Hotel"}
            </strong>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0 pt-3 mb-2 text-dark">
            <strong>Check-in Date</strong>
          </div>
          <div className="col-12 box_container p-2">
            <strong>
              {props.searchData.date
                ? props.searchData.date
                : new Date().toLocaleDateString()}
            </strong>
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

//SEARCHLIST COMPONENT
//////////////////////////
const SearchList = (props) => {
  return <div className="col-12 col-sm-9"></div>;
};

///////////////////////////
//SEACH COMPONENT
////////////////////////////
const Search = (props) => {
  return (
    <div>
      <NavBarItem navBarItems={props.navBarItems} />
      <div className="container">
        <div className=" row contaier_2_component">
          <SearchPopup searchData={props.searchDataInput} />
          <SearchList searchData={props.searchDataInput} />
        </div>
      </div>

      <Form />
      <Footer footerListData={props.footerList} />
    </div>
  );
};

export default Search;
