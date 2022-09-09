import { useSelector } from "react-redux";
import "./CommentIndexItem.css";
import { useState } from "react";
import PopupConfirmation from "../../PopupConfirmation";

const CommentIndexItem = ({ comment }) => {
  const sessionUserId = useSelector((state) => state.session.user.id);
  const [displayPopup, setDisplayPopup] = useState(false);

  const hidePopup = () => {
    setDisplayPopup(false);
  };

  return (
    <>
      <div className="comment">
        <h1>{`${comment.fname} ${comment.lname}`}</h1>
        <p>{comment.body}</p>
        {sessionUserId === comment.authorId && (
          <>
            <button>Edit</button>
            <button onClick={() => setDisplayPopup(true)}>Delete</button>
          </>
        )}
        {displayPopup && (
          <PopupConfirmation displayPopup={hidePopup} commentId={comment.id} />
        )}
      </div>
    </>
  );
};

export default CommentIndexItem;
