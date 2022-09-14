import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../../store/session";
import { FaUserCircle } from "react-icons/fa";
import "./ProfileButton.css";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="profile-dropdown">
        <button className="profile-button" onClick={openMenu}>
          <FaUserCircle fontSize={"30px"} color="white" />
        </button>
        {showMenu && (
          <div className="dropdown-menu">
            <h1>{`Welcome, ${user.username}`}</h1>
            <button className="logout-button" onClick={logout}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileButton;
