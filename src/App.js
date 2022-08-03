import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import { NAVBAR } from "./shared/navBar";
import { CITY } from "./shared/city";
import { TYPE } from "./shared/type";
import { HOTEL_LIST } from "./shared/hotel_list";
import { FOOTER } from "./shared/footer";

function App() {
  const [navBar, setNavBar] = useState(NAVBAR);
  const [cityData, setCityData] = useState(CITY);
  const [typeListData, setTypeListData] = useState(TYPE);
  const [hotelListData, setHotelListData] = useState(HOTEL_LIST);
  const [footerListData, setFooterListData] = useState(FOOTER);

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
            />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
