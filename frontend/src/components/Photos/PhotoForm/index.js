import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createPhoto } from "../../../store/reducers/photos_reducer";
import "./PhotoForm.css";

const PhotoForm = () => {
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();
  let photo = {
    title: "",
    description: "",
    userId,
    photoFile: null,
  };

  const [photoData, setPhotoData] = useState(photo);
  const [photoURL, setPhotoURL] = useState(null);
  if (!userId) return <Redirect to="/login" />;

  const handleFile = (e) => {
    setPhotoData({ ...photoData, photoFile: e.currentTarget.files[0] });
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPhotoURL(fileReader.result);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("photo[title]", photoData.title);
    data.append("photo[description]", photoData.description);
    data.append("photo[userId]", photoData.userId);
    data.append("photo[photo]", photoData.photoFile);
    dispatch(createPhoto(data));
  };

  return (
    <>
      <div className="photo-form-page">
        <div className="photo-form-sidebar">
          <div className="photo-form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                onChange={(e) =>
                  setPhotoData({ ...photoData, title: e.target.value })
                }
              />
              <textarea
                rows="4"
                placeholder="Description"
                onChange={(e) =>
                  setPhotoData({ ...photoData, description: e.target.value })
                }
              />
              <input type="file" onChange={handleFile} />
              <button>Upload</button>
            </form>
          </div>
        </div>
        <div className="photo-preview">
          {photoURL && <img src={photoURL} alt="preview" />}
        </div>
      </div>
    </>
  );
};

export default PhotoForm;
