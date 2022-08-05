import React, { useState } from "react";
import NavBarItem from "../UI/NavBarItem";
import Header from "../UI/HeaderComponent";
import Form from "../UI/FormComponent";
import Footer from "../UI/FooterComponent";
import "./Home.css";
import { Link } from "react-router-dom";

//HIỂN THỊ DANH SÁCH THÀNH PHỐ
//////////////////////
const CityRenderComponent = (props) => {
  const cityRender = props.cityListData.map((city) => {
    return (
      <div className="col-4 card container-city_image" key={city.name}>
        <img
          className="card-img-top"
          src={city.image}
          alt={city.name}
          width="100%"
        />
        <div className="card-img-overlay">
          <div className="card-body">
            <h3 className="card-text">{city.name}</h3>
            <h5 className="card-text">{city.subText}</h5>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mt-5">
      <div className="row container-city">{cityRender}</div>
    </div>
  );
};

//HIỂN THỊ DANH SÁCH CÁC LOẠI NHÀ Ở
//////////////////////
const TypeRenderComponent = (props) => {
  const typeRender = props.typeListData.map((type) => {
    return (
      <div className="card ml-4 mt-2" key={type.name}>
        <img src={type.image} alt={type.name} width="200px" height="150px" />
        <div className="card-footer">
          <p className="card-text card_type_name">
            <strong>{type.name}</strong>
          </p>
          <p className="card-text card_type_count">{type.count}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container mt-5 mb-5">
      <h3 className="mb-4">Browse by property type</h3>
      <div className="row container-type justify-content-center">
        {typeRender}
      </div>
    </div>
  );
};

//HIỂN THỊ DANH SÁCH KHÁCH SẠN
//////////////////////
const HotelRenderComponent = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); //cuộn lên đầu trang
  };
  const hotelRender = props.hotelListData.map((hotel) => {
    return (
      <div className="card col-12 col-md-3" key={hotel.name}>
        <img
          src={hotel.image_url}
          alt={hotel.name}
          width="100%"
          height="253px"
        />
        <div className="card-footer">
          {/* VẤN ĐỀ: KHI SỬ DỤNG LINK ĐỂ MỞ TRANG MỚI, TRANG MỚI ĐƯỢC MỞ RA NHƯNG KHÔNG NẰM Ở ĐẦU TRANG => TẠO HÀM scrollToTop ĐỂ TRANG MỞ RA LUÔN NẰM Ở ĐẦU TRANG  */}
          <Link to={`/detail/${hotel.id}`} onClick={scrollToTop}>
            <p className="card_text_name">{hotel.name}</p>
          </Link>
          <p className="card_text_city">{hotel.city}</p>
          <p className="card_text_price">Starting from ${hotel.price}</p>
          <p className="card_text_type">
            <span className="card_text_rate mr-2">{hotel.rate}</span>
            {hotel.type}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="container  mt-5 mb-5">
      <h3 className="mb-4">Homes guests love</h3>
      <div className="row  container_hotel">{hotelRender}</div>
    </div>
  );
};

/////////////////////
//HIỂN THỊ TOÀN BỘ TRANG HOME
//////////////////////
const Home = (props) => {
  //hàm sao chép giá trị searchInput từ Header Component chuyển cho App Component
  const getSearchDataHandler = (enteredSearchData) => {
    const searchData = { ...enteredSearchData }; //sao chép data
    props.onSearchInput(searchData); // truyền searchData lên App component
  };
  return (
    <div>
      <NavBarItem navBarItems={props.navBarItems} />
      <Header onGetSearcchData={getSearchDataHandler} />
      <CityRenderComponent cityListData={props.cityList} />
      <TypeRenderComponent typeListData={props.typeList} />
      <HotelRenderComponent hotelListData={props.hotelList} />
      <Form />
      <Footer footerListData={props.footerList} />
    </div>
  );
};

export default Home;
