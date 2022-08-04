import React from "react";
import { useParams } from "react-router-dom";
import NavBarItem from "../UI/NavBarItem";
import Form from "../UI/FormComponent";
import Footer from "../UI/FooterComponent";
import "./Detail.css";

const Detail = (props) => {
  //lấy id tương ứng của hotel cần hiển thị detail
  const hotelId = useParams().hotelId;

  //lấy dữ liệu hotel cần hiển thị tương ứng với id
  const detailHotelData = props.detailHotel
    .filter((data) => data.id === Number(hotelId))
    .map((hotel) => {
      return (
        <div key={hotel.id}>
          <div className="row mt-4 container_detail_hotel">
            <div className="col-12 col-sm-8 container_detail_hotel_info ">
              <h4>
                <b>{hotel.name}</b>
              </h4>
              <p className="mt-4 small_text">
                <i className="fa fa-map-marker mr-1"></i>
                {hotel.address}
              </p>
              <p className="text_info_bold text-primary">{hotel.distance}</p>
              <p className="text_info_bold text-success">{hotel.price}</p>
            </div>
            <div className="col-12 offset-sm-1 col-sm-3 ">
              <button type="button" className="btn btn-primary ">
                Reserve or Book Now!
              </button>
            </div>
          </div>
          <div className="row">
            <div className="ml-3">
              {hotel.photos.map((photo) => (
                <img
                  className="col-12 col-sm-4 p-1"
                  src={photo}
                  key={Math.random().toString()}
                  alt={photo}
                />
              ))}
            </div>
          </div>
          <div className="row mt-5 container_desription">
            <div className="col-12 col-sm-9">
              <h4 className="mb-4">
                <b>{hotel.title}</b>
              </h4>
              <p className="text-justify text_small mb-5">
                {hotel.description}
              </p>
            </div>
            <div className="col-12 col-sm-3 box_content">
              <p className="title_color mt-3">
                <b>Perfect for a 9-night stay!</b>
              </p>
              <p className=" text_small">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </p>
              <p className="text_big">
                <b>${hotel.nine_night_price}</b> (9 nights)
              </p>
              <div className="row">
                <div className="col-12 d-flex justify-content-center mb-3">
                  <button type="button" className="btn btn-primary ">
                    Reserve or Book Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div>
      <NavBarItem navBarItems={props.navBarItems} />
      <div className="container">{detailHotelData}</div>
      <Form />
      <Footer footerListData={props.footerList} />
    </div>
  );
};

export default Detail;
