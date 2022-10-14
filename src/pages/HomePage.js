import { useSelector } from "react-redux";

import Banner from "../components/HomePage/Banner";
import Collections from "../components/HomePage/Collections";
import OtherInfomation from "../components/HomePage/OtherInfo";
import TrendingProducts from "../components/HomePage/TrendingProducts";
import ReactDOM from "react-dom";
import LiveChatIcon from "../components/UI/LiveChatIcon";
import LiveChatBox from "./../components/UI/LiveChatBox";

const HomePage = () => {
  const isOpenLiveChat = useSelector((state) => state.liveChat.isOpen);
  return (
    <div className="homepage-container">
      <Banner />
      <Collections />
      <TrendingProducts />
      <OtherInfomation />
      <LiveChatIcon />
      {isOpenLiveChat &&
        ReactDOM.createPortal(
          <LiveChatBox />,
          document.getElementById("popup-root")
        )}
    </div>
  );
};
export default HomePage;
