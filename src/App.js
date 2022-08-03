import React, { useId, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import { NAVBAR } from "./shared/navBar";
import { CITY } from "./shared/city";
import { TYPE } from "./shared/type";
import { HOTEL_LIST } from "./shared/hotel_list";
import { FOOTER } from "./shared/footer";

function App(props) {
  //CẬP NHẬT CÁC INPUT DATA CỦA ASM VÀO CÁC STATE
  const [navBar, setNavBar] = useState(NAVBAR);
  const [cityData, setCityData] = useState(CITY);
  const [typeListData, setTypeListData] = useState(TYPE);
  const [hotelListData, setHotelListData] = useState(HOTEL_LIST);
  const [footerListData, setFooterListData] = useState(FOOTER);
  // setNavBar();
  // setCityData();
  // setTypeListData();
  // setHotelListData();
  // setFooterListData();

  //DỮ LIỆU TÌM KIẾM TRONG HEADER DO NGƯỜI DÙNG NHẬP VÀO
  // let userInput;
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
            />
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
