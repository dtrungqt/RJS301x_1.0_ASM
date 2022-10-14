import ProductList from "../components/ShopPage/ProductList";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import LiveChatIcon from "../components/UI/LiveChatIcon";
import LiveChatBox from "./../components/UI/LiveChatBox";

const ShopPage = () => {
  const isOpenLiveChat = useSelector((state) => state.liveChat.isOpen);
  return (
    <div className="shoppage-container">
      <div className="brand-container d-flex justify-content-between align-items-center">
        <h1 className="ms-5">SHOP</h1>
        <h4 className="me-5">SHOP</h4>
      </div>
      <ProductList />
      <LiveChatIcon />
      {isOpenLiveChat &&
        ReactDOM.createPortal(
          <LiveChatBox />,
          document.getElementById("popup-root")
        )}
    </div>
  );
};
export default ShopPage;
