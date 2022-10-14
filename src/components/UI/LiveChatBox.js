import { FcBusinessman } from "react-icons/fc";
import { FaTelegramPlane } from "react-icons/fa";
import { HiUpload } from "react-icons/hi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
const LiveChatBox = () => {
  return (
    <div className="chatbox-container animations  d-none d-sm-none d-md-block">
      <div className="chatbox-header d-flex justify-content-between">
        <h4>Customer Support</h4>
        <button>Let's Chat App</button>
      </div>
      <div className="chatbox-body">
        <p className="user-chat">
          <span>Xin chào</span>
        </p>
        <p className="user-chat">
          <span>Làm thế nào để xem các sản phẩm</span>
        </p>
        <div className="d-flex justify-content-start">
          <FcBusinessman />
          <div className="admin-chat">
            <span>ADMIN: Chào bạn</span>
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <FcBusinessman />

          <div className="admin-chat long">
            ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
          </div>
        </div>
      </div>
      <div className="chatbox-footer d-flex justify-content-start">
        <FcBusinessman className="align-self-center" />
        <input type="text" placeholder="Enter Message!" />
        <HiUpload className="align-self-center mx-2" />
        <BsFillEmojiSmileFill className="align-self-center mx-2" />
        <FaTelegramPlane className="align-self-center mx-2" />
      </div>
    </div>
  );
};
export default LiveChatBox;
