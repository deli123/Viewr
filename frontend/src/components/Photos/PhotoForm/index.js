import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createPhoto } from "../../../store/reducers/photos_reducer";
import imageUpload from "../../../../src/assets/images/image-upload.svg";
import "./PhotoForm.css";

const PhotoForm = () => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  let photo = {
    title: "",
    description: "",
    userId: user.id,
    photoFile: null,
  };

  const [photoData, setPhotoData] = useState(photo);
  const [photoURL, setPhotoURL] = useState(null);
  const [showForm, setShowForm] = useState(false);
  if (!user) return <Redirect to="/login" />;

  const handleFile = (e) => {
    setPhotoData({ ...photoData, photoFile: e.currentTarget.files[0] });

    // when file is received, move the input box down from the center to below the image preview
    let inputBox = document.getElementsByClassName("file-input-box")[0];
    inputBox.classList.add("move-box-position");

    setShowForm(true);
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPhotoURL(fileReader.result);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    e.target.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
    setPhotoData({ ...photoData, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("photo[title]", photoData.title);
    data.append("photo[description]", photoData.description);
    data.append("photo[userId]", photoData.userId);
    data.append("photo[photo]", photoData.photoFile);
    dispatch(createPhoto(data));
    history.push(`/users/${user.id}`);
  };

  return (
    <>
      <div className="photo-form-page">
        <div className="file-input-box">
          <div className="file-input-box-label">
            <img src={imageUpload} alt="upload-box" />
            <p>Click here to add a file</p>
          </div>
          <input
            type="file"
            onChange={handleFile}
            accept=".gif,.jpg,.jpeg,.png,.tiff,.raw"
            required
          />
        </div>
        <div className="photo-form-sidebar">
          {showForm && (
            <div className="photo-form-title">
              <h1>Editing 1 photo:</h1>
            </div>
          )}
          <div className="photo-form-container">
            <form>
              <label>Title:</label>
              <textarea
                className="photo-form-title-input"
                type="text"
                placeholder="Title"
                onChange={(e) =>
                  setPhotoData({ ...photoData, title: e.target.value })
                }
                rows="3"
              />
              <label>Description:</label>
              <textarea
                rows="6"
                placeholder="Add a description"
                onChange={handleChange}
              />
              {showForm && (
                <button className="comment-form-button" onClick={handleSubmit}>
                  Upload
                </button>
              )}
            </form>
          </div>
        </div>
        <div
          className="photo-preview"
          style={{ backgroundImage: photoURL ? `url(${photoURL})` : "url('')" }}
        >
          {!photoURL && <h1>Upload an image!</h1>}
        </div>
      </div>
    </>
  );
};

export default PhotoForm;
