import React from "react";
import { useParams } from "react-router-dom";
import NavBarItem from "../UI/NavBarItem";
import Form from "../UI/FormComponent";
import Footer from "../UI/FooterComponent";

const Detail = (props) => {
  //lấy id tương ứng của hotel cần hiển thị detail
  const hotelId = useParams().hotelId;

  //lấy dữ liệu hotel cần hiển thị tương ứng với id
  const detailHotelData = props.detailHotel
    .filter((data) => data.id === Number(hotelId))
    .map((hotel) => {
      return (
        <div className="row" key={hotel.id}>
          <div className="col-12 col-sm-9">
            <h4>{hotel.name}</h4>
            <p>
              <i className="fa fa-map-marker "></i>
              {hotel.address}
            </p>
            <p>{hotel.distance}</p>
            <p>{hotel.price}</p>
          </div>
          <div className="col-12 col-sm-3">
            <button type="button" className="btb btn-primary">
              Reserve or Book Now!
            </button>
          </div>
          <div className="row">
            {hotel.photos.map((photo) => (
              <img
                className="col-12 col-sm-4"
                src={photo}
                key={Math.random().toString()}
                alt={photo}
              />
            ))}
          </div>
          <div className="row">
            <div className="col-12 col-sm-8">
              <p>{hotel.title}</p>
              <p>{hotel.description}</p>
            </div>
            <div className="col-12 col-sm-4">
              <p>Perfect for a 9-night stay!</p>
              <p>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </p>
              <p>${hotel.nine_night_price} (9 nights)</p>
              <button type="button" className="btb btn-primary">
                Reserve or Book Now!
              </button>
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
