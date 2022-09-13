import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/reducers/comments_reducer";
import { IoClose } from "react-icons/io5";
import { deletePhoto } from "../../store/reducers/photos_reducer";
import { useHistory } from "react-router-dom";
import "./PopupConfirmation.css";

function PopupConfirmation({ displayPopup, commentId, photoId, type }) {
  const isDeletePhoto = type === "photo" ? true : false;
  const dispatch = useDispatch();
  const history = useHistory();

  const hidePopup = (e) => {
    e.preventDefault();
    displayPopup(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (isDeletePhoto) {
      dispatch(deletePhoto(photoId));
      history.push("/explore");
    } else {
      dispatch(deleteComment(commentId));
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-message">
        <div className="popup-header">
          <h1 className="popup-title">
            {isDeletePhoto ? "Delete Photo" : "Delete Comment"}
          </h1>
          <button className="popup-close-button" onClick={hidePopup}>
            <IoClose fontSize={"13"} />
          </button>
        </div>
        <h3 className="popup-question">
          Are you sure you want to delete this{" "}
          {isDeletePhoto ? "photo" : "comment"}?
        </h3>
        <div className="popup-buttons">
          <button className="cancel-button" onClick={hidePopup}>
            Cancel
          </button>
          <button className="confirm-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default PopupConfirmation;
