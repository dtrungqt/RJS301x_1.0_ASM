import { GrClose } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { popupActions } from "../../store";

const Popup = () => {
  const detailProduct = useSelector((state) => state.popup.detailProduct);
  const dispatch = useDispatch();
  const closeDetailPopupHandler = () => {
    dispatch(popupActions.hidePopup());
  };

  return (
    <div className="popup-container ">
      <div className="content-container position-absolute top-50 start-50 translate-middle">
        <div
          className="icon-container d-flex justify-content-end"
          // onClick={closeDetailPopupHandler}
        >
          <div className="close-icon" onClick={closeDetailPopupHandler}>
            <GrClose />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              className="img-detail"
              src={detailProduct.img1}
              alt={detailProduct.name}
            />
          </div>

          <div className="col-12 col-lg-6">
            <h3>{detailProduct.name}</h3>
            <h4>{`${detailProduct.price
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND`}</h4>
            <p>{detailProduct.short_desc}</p>
            <button type="button">
              <Link className="link">
                {" "}
                <FaShoppingCart />
                View Detail
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
