import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import NAVBAR from "./data/navBar";
import CITY from "./data/city";
import TYPE from "./data/type";
import HOTEL_LIST from "./data/hotel_list";
import FOOTER from "./data/footer";
import SEARCH from "./data/search";
import DETAIL from "./data/detail";

function App(props) {
  //CẬP NHẬT CÁC INPUT DATA CỦA ASM VÀO CÁC STATE
  const navBar = NAVBAR;
  const cityData = CITY;
  const typeListData = TYPE;
  const hotelListData = HOTEL_LIST;
  const footerListData = FOOTER;
  const searchResultData = SEARCH;
  const detailData = DETAIL;

  //DỮ LIỆU TÌM KIẾM TRONG HEADER DO NGƯỜI DÙNG NHẬP VÀO
  const [userInput, setUserInput] = useState({
    hotel: "",
    date: "",
    amountAdult: "",
    amountChildren: "",
    amountRoom: "",
  });

  //HÀM CẬP NHẬT UserInput
  const searchInputHandler = (dataInput) => {
    console.log("In App");
    setUserInput({
      hotel: dataInput.hotel,
      date: dataInput.date,
      amountAdult: dataInput.amountAdult,
      amountChildren: dataInput.amountChildren,
      amountRoom: dataInput.amountRoom,
    });
    console.log(userInput);
  };

  //RENDER
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              navBarItems={navBar}
              cityList={cityData}
              typeList={typeListData}
              hotelList={hotelListData}
              footerList={footerListData}
              onSearchInput={searchInputHandler}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              navBarItems={navBar}
              footerList={footerListData}
              searchDataInput={userInput}
              searchResult={searchResultData}
            />
          }
        />
        <Route
          path="/detail/:hotelId"
          element={
            <Detail
              detailHotel={detailData}
              navBarItems={navBar}
              footerList={footerListData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
