import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PopupConfirmation from "../../PopupConfirmation";
import { editComment } from "../../../store/reducers/comments_reducer";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import "./CommentIndexItem.css";
import { cuteTimeAgo } from "../../../util/dateUtil";

const CommentIndexItem = ({ comment }) => {
  const dispatch = useDispatch();
  const sessionUserId = useSelector((state) => state.session.user.id);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showEditButton, setShowEditButton] = useState(true);
  const [showButtons, setShowButtons] = useState(false);
  const [body, setBody] = useState(comment.body);

  let updateComment = {
    id: comment.id,
    body: comment.body,
    authorId: comment.authorId,
    photoId: comment.photoId,
  };

  const hidePopup = () => {
    setDisplayPopup(false);
  };

  const handleFocus = (e) => {
    if (e.currentTarget !== e.target) {
      setShowButtons(false);
    }
  };

  const handleChange = (e) => {
    e.target.style.height = "initial";
    e.target.style.height = `${e.target.scrollHeight}px`;
    e.target.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
    setBody(e.target.value);
  };

  const handleEditButton = (e) => {
    e.preventDefault();
    setShowEditButton(false);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateComment = { ...updateComment, body };
    dispatch(editComment(updateComment));
    setShowForm(false);
    setShowEditButton(true);
    setBody(body);
  };

  return (
    <>
      <div
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
        onClick={handleFocus}
        className="comment"
      >
        <div className="comment-author-pic">
          <CgProfile fontSize={"32px"} />
        </div>
        <div className="comment-details">
          <div className="comment-header">
            <div className="comment-title">
              <Link to={`/users/${comment.authorId}`}>
                <h1>{`${comment.fname} ${comment.lname}`}</h1>
              </Link>
              <p className="comment-time-ago">{cuteTimeAgo(comment.updatedAt)}</p>
            </div>
            {sessionUserId === comment.authorId && (
              <>
                {showButtons && (
                  <div className="comment-buttons">
                    {showEditButton && (
                      <button onClick={handleEditButton}>
                        <FiEdit fontSize={"20px"} />
                      </button>
                    )}
                    <button onClick={() => setDisplayPopup(true)}>
                      <RiDeleteBin6Line fontSize={"20px"} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          {!showForm && <p>{comment.body}</p>}
          {showForm && (
            <>
              <div>
                <form>
                  <textarea rows="4" value={body} onChange={handleChange} />
                  <button
                    className="comment-form-button"
                    onClick={handleSubmit}
                  >
                    Done
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
        {displayPopup && (
          <PopupConfirmation displayPopup={hidePopup} commentId={comment.id} />
        )}
      </div>
    </>
  );
};

export default CommentIndexItem;
