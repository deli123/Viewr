import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import HomeButton from "../HomeButton";
import PersonalLinks from "../PersonalLinks";

const Navigation = () => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <Link className="login-button" to="/login">
          Log In
        </Link>
        <Link className="nav-button signup-button" to="/signup">
          Sign Up
        </Link>
      </>
    );
  }

  return (
    <>
      <HomeButton />
      <PersonalLinks/>
      <ul className="session-links">
        <li>{sessionLinks}</li>
      </ul>
    </>
  );
};

export default Navigation;
