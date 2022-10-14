import { FaFacebookMessenger } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { liveChatActions } from "../../store";

const LiveChatIcon = () => {
  const dispatch = useDispatch();
  const openLiveChatHandler = () => {
    dispatch(liveChatActions.toggleState());
  };
  return (
    <div className="chaticon-container d-none d-sm-none d-md-block">
      <FaFacebookMessenger className="chaticon" onClick={openLiveChatHandler} />
    </div>
  );
};
export default LiveChatIcon;
