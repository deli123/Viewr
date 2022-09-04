import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import HomeButton from "../HomeButton";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <button className="login-button">
          <Link to="/login">Log In</Link>
        </button>
        <button className="signup-button">
          <Link to="/signup">Sign Up</Link>
        </button>
      </>
    );
  }

  return (
    <>
      <HomeButton />
      <ul className="session-links">
        <li>{sessionLinks}</li>
      </ul>
    </>
  );
}

export default Navigation;
