import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import "./PhotoEditForm.css";
import { useState, useEffect } from "react";
import { editPhoto } from "../../../store/reducers/photos_reducer";

const PhotoEditForm = ({ photo }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user.id);
  const isOwner = sessionUser === photo.userId ? true : false;
  const [showButton, setShowButton] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState(photo.title);
  const [description, setDescription] = useState(photo.description);

  // only the owner will see a hover effect over the title and description
  useEffect(() => {
    if (isOwner) {
      let container = document.getElementsByClassName(
        "photo-edit-form-container"
      )[0];
      container.classList.add("photo-owner");
    }
  }, []);

  const handleClick = (e) => {
    setShowForm(true);
    setShowButton(false);
  };

  const handleMouseEnter = (e) => {
    if (!showForm) setShowButton(true);
    else setShowButton(false);
  };
  const handleMouseLeave = (e) => {
    if (!showForm) setShowButton(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatePhoto = { ...photo, title, description };
    dispatch(editPhoto(updatePhoto));
    setShowForm(false);
  };

  return (
    <>
      <div
        className="photo-edit-form-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="photo-title">
          {showForm && (
            <>
              <div className="photo-edit-form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <button className="photo-edit-submit" onSubmit={handleSubmit}>
                    Done
                  </button>
                </form>
              </div>
            </>
          )}
          {!showForm && <h1>{`${photo.title}`}</h1>}
          {isOwner && showButton && (
            <FiEdit
              className="photo-edit-button"
              fontSize={"20px"}
              onClick={handleClick}
            />
          )}
        </div>
        <div className="photo-description">
          {!showForm && <p>{photo.description}</p>}
        </div>
      </div>
    </>
  );
};

export default PhotoEditForm;
