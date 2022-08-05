import React, { useState } from "react";
import NavBarItem from "../UI/NavBarItem";
import Form from "../UI/FormComponent";
import Footer from "../UI/FooterComponent";
import "./Search.css";
import SearchPopup from "./SearchPopupComponent";
import SearchList from "./SearchListComponent";

const Search = (props) => {
  const searchInputFromHome = props.searchDataInput;

  //ĐẶT GIÁ TRỊ BAN ĐẦU CỦA CÁC TRƯỜNG NẾU USER K ĐIỀN VÀO SEARCH Ở HOME
  if (!searchInputFromHome.hotel.trim())
    searchInputFromHome.hotel = "Hotels Available"; //trim() dùng để loại bỏ khoảng trắng trc và sau string
  if (!searchInputFromHome.amountAdult) searchInputFromHome.amountAdult = 1;
  if (!searchInputFromHome.amountChildren)
    searchInputFromHome.amountChildren = 0;
  if (!searchInputFromHome.amountRoom || searchInputFromHome.amountRoom === "0")
    searchInputFromHome.amountRoom = 1;

  //Cập nhật searchInput ở trang Home vào đây
  //State này dùng để gửi tới SearchPopupComponent để hiển thị thông tin đồng thời gửi tới SearchListComponent để tìm kiếm kết quả
  const [searchInput, setSearchInput] = useState({
    hotel: "",
    date: "",
    amountAdult: "",
    amountChildren: "",
    amountRoom: "",
    minPrice: "",
    maxPrice: "",
    ...searchInputFromHome,
  });
  // console.log(searchInput);
  const updateSearchInputHandle = (data) => {
    setSearchInput(data);
  };

  return (
    <div>
      <NavBarItem navBarItems={props.navBarItems} />
      <div className="container">
        <div className=" row contaier_2_component">
          {/* HIỂN THỊ HỘP SEARCH BÊN TRÁI  */}
          <SearchPopup
            searchData={searchInput} //dữ liệu tìm kiếm user nhập vào
            onUpdateSearchInput={updateSearchInputHandle} // cập nhật dữ liệu tìm kiếm user nhập vào
          />
          {/* HIỂN THỊ KẾT QUẢ SEARCH  */}
          <SearchList
            searchData={searchInput} //dữ liệu tìm kiếm user nhập vào
            searchResultData={props.searchResult} //dữ liệu Hotel có sẵn
          />
        </div>
      </div>
      <Form />
      <Footer footerListData={props.footerList} />
    </div>
  );
};

export default Search;
