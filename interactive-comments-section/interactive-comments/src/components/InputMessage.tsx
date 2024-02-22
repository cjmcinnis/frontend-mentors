import { useState } from "react";
import data from "../assets/data.json";

type Props = {};

const InputMessage = (props: any) => {
  const { commentId } = props;

  const [currentUser, setCurrentUser] = useState<any>(data.currentUser);

  function handleNewMessage(){
    const newMessage = {
      user: currentUser,
      message: "",
      score: 0,
      createdAt: new Date().toLocaleString(),
      replies: [],
      replyingTo: ""
    };
    setCurrentUser(newMessage);
  }

  return (
    <div className="message-box my-3 rounded-3  container">
      <div className="p-3 d-flex">
        <div className="">
          <img
            src={currentUser.image.png}
            alt="profile picture"
            className="profile-picture"
          />
        </div>
        <div className="ms-3 flex-grow-1">
          <textarea
            className="form-control reply-text-box"
            aria-label="With textarea"
          ></textarea>
        </div>
        <div className="ms-3">
          <button className="btn reply-button-submit text-white" onClick={handleNewMessage}>REPLY</button>
        </div>
      </div>
    </div>
  );
};

export default InputMessage;
