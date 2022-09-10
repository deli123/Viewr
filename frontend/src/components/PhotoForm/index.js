import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/UserNavBar";
import "./PhotoForm.css";

const PhotoForm = () => {
  return (
    <>
      <NavBar />
      <div className="photo-form-page">
        <div className="photo-form-sidebar"></div>
      </div>
    </>
  );
};

export default PhotoForm;
