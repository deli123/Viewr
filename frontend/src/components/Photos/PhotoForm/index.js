import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import csrfFetch from "../../../store/csrf";
import { createPhoto } from "../../../store/reducers/photos_reducer";
import "./PhotoForm.css";

const PhotoForm = () => {
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();
  let photo = {
    title: "hi",
    description: "hi",
    userId,
    photoFile: null,
  };

  const [photoData, setPhotoData] = useState(photo);
  if (!userId) return <Redirect to="/login" />;

  const handleFile = (e) => {
    setPhotoData({ ...photoData, photoFile: e.currentTarget.files[0] });
  };

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo[title]", photoData.title);
    formData.append("photo[description]", photoData.description);
    formData.append("photo[userId]", photoData.userId);
    formData.append("photo[photo]", photoData.photoFile);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // dispatch(createPhoto(formData));
    csrfFetch(`/api/photos`, {
      method: "POST",
      data: formData,
      contentType: false,
      processData: false,
    });
  };

  return (
    <>
      <div className="photo-form-page">
        <div className="photo-form-sidebar"></div>
        <div className="photo-form-container">
          <form onSubmit={handleSubmit}>
            Title
            <input type="text" />
            Description
            <input type="text" />
            <input type="file" onChange={handleFile} />
            <button>Upload</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PhotoForm;
