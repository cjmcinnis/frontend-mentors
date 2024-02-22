import plusButton from "../images/icon-plus.svg";
import minusButton from "../images/icon-minus.svg";
import replyIcon from "../images/icon-reply.svg";
import InputMessage from "./InputMessage";
import { useState } from "react";

// type Props = {}

const Message = (props: any) => {
  const [replying, setReplying] = useState(false);

  const { user, message, score, createdAt, replies, replyingTo } = props;
  const img = user.image.png;

  const itemList = replies.map((comment: any) => (
    <Message
      key={comment.id}
      user={comment.user}
      message={comment.content}
      score={comment.score}
      createdAt={comment.createdAt}
      replies={comment.replies}
      replyingTo={comment.replyingTo}
    />
  ));

  // if replying to a comment, then add margin, padding, and border to the start
  let topClass =
    replyingTo !== "" ? "container border-start ms-4 ps-4" : "container";

  function handleReply() {
    setReplying(!replying);
  }

  return (
    <>
      <div className={topClass}>
        <div className="message-box my-3 rounded-3 d-flex align-items-center ">
          <div className="">
            <div className="upvote-box flex-column m-3 p-2 rounded-1">
              <button className="btn btn-default button-no-padding ">
                <img src={plusButton} alt="" />
              </button>
              <p className="align-self-center">{score}</p>
              <button className="btn btn-default button-no-padding">
                <img src={minusButton} alt="" />
              </button>
            </div>
          </div>
          <div className="mt-2">
            <div className="d-flex align-items-center ">
              <img
                src={img}
                alt="profile picture"
                className="profile-picture"
              />
              <span className="message-box-header ms-3">{user.username}</span>
              <span className="message-box-time ms-2">{createdAt}</span>
              <button className="btn reply-text ms-auto" onClick={handleReply}>
                <img src={replyIcon} alt="" className="me-1" />
                Reply
              </button>
            </div>
            <div className="text-box">
              <p>{message}</p>
            </div>
          </div>
        </div>
        {replying ? <InputMessage></InputMessage> : ""}
        {itemList}
      </div>
    </>
  );
};

Message.defaultProps = {
  user: "Not found",
  message: "",
  score: 0,
  createdAt: "",
  replies: [],
  replyingTo: "",
};

export default Message;
