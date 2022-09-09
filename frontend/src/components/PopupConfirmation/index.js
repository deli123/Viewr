import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/reducers/comments_reducer";
import { IoClose } from "react-icons/io5";
import "./PopupConfirmation.css";

function PopupConfirmation({ displayPopup, commentId }) {
  const dispatch = useDispatch();

  const hidePopup = (e) => {
    e.preventDefault();
    displayPopup(false);
  };

  const handleDelete = (e, commentId) => {
    e.preventDefault();
    dispatch(deleteComment(commentId));
  };

  return (
    <div className="popup-container">
      <div className="popup-message">
        <div className="popup-header">
          <h1 className="popup-title">Delete Comment</h1>
          <button className="popup-close-button" onClick={hidePopup}>
            <IoClose fontSize={"13"}/>
          </button>
        </div>
        <h3 className="popup-question">
          Are you sure you want to delete this comment?
        </h3>
        <div className="popup-buttons">
          <button className="cancel-button" onClick={hidePopup}>
            Cancel
          </button>
          <button
            className="confirm-button"
            onClick={(e) => handleDelete(e, commentId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default PopupConfirmation;
