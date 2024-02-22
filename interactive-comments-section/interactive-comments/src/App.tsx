import { useState, useEffect } from "react";
import data from "./assets/data.json";
import Message from "./components/Message";

function App() {
  const [currentUser, setCurrentUser] = useState<any>(data.currentUser);
  const [comments, setComments] = useState<any>(data.comments);

  useEffect(() => {
    setCurrentUser(data.currentUser);
  }, []);

  useEffect(() => {
    setComments(data.comments);
  }, []);

  const itemList = comments.map((comment: any) => (
    <Message
      key={comment.id}
      user={comment.user}
      message={comment.content}
      score={comment.score}
      createdAt={comment.createdAt}
      replies={comment.replies}
    />
  ));

  return <div className="container">{itemList}</div>;
}

export default App;
