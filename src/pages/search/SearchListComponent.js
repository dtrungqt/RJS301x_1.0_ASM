import React from "react";
//TỪNG KẾT QUẢ SEARCH
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

//HIỂN THỊ KẾT QUẢ SEARCH BÊN PHẢI
//////////////////////////
const SearchList = (props) => {
  let searchResult;

  //mảng kết quả tìm theo tên khách sạn
  const searchName = props.searchResultData.filter((data) =>
    data.name.toLowerCase().includes(props.searchData.hotel.toLowerCase())
  );

  //mảng kết quả tìm theo tên thành phố
  const searchCity = props.searchResultData.filter((data) =>
    data.city.toLowerCase().includes(props.searchData.hotel.toLowerCase())
  );

  //mảng kết quả tìm theo price
  let searchPrice;
  if (!props.searchData.minPrice && !props.searchData.maxPrice) {
    searchPrice = props.searchResultData; // nếu ko nhập giá vào 2 trường price thì searchPrice = data có sẵn
  } else
    searchPrice = props.searchResultData.filter(
      (data) =>
        data.price >= Number(props.searchData.minPrice) &&
        data.price <= Number(props.searchData.maxPrice)
    );
  //   console.log(searchPrice);

  //LỌC KẾT QUẢ TÌM KIẾM THEO TÊN VÀ SỐ PHÒNG
  if (searchName.length && props.searchData.hotel.trim()) {
    //điều kiện props.searchData.hotel.trim() để kiểm tra trường Destination có được nhập hay không
    //trường hợp tìm theo tên hotel
    searchResult = searchName;
  } else {
    //trường hợp tìm đúng thành phố/đất nước của hotel
    if (searchCity.length && props.searchData.hotel.trim()) {
      searchResult = searchCity;
    } else {
      //trường hợp tìm theo tiền và số phòng
      if (Number(props.searchData.amountRoom) === 1 && searchPrice.length) {
        //trường hợp chọn 1 phòng
        searchResult = searchPrice;
      } else if (
        Number(props.searchData.amountRoom) === 2 &&
        searchPrice.length
      ) {
        //trường hợp chọn 2 phòng
        searchResult = searchPrice.filter(
          (data) => data.size === "medium" || data.size === "big"
        );
      } else if (
        Number(props.searchData.amountRoom) > 2 &&
        searchPrice.length
      ) {
        //trường hợp chọn 3 phòng trở lên
        searchResult = searchPrice.filter((data) => data.size === "big");
      } else searchResult = []; // không thỏa mãn điều kiện nào
    }
  }
  //RENDER
  return (
    <div className="col-12 col-sm-8">
      <SearchListItem dataResult={searchResult} />
    </div>
  );
};

export default SearchList;
