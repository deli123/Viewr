import { Link } from "react-router-dom";
import "./HomeButton.css";
import logo from "../../../assets/images/logo.png";

const HomeButton = () => {
  return (
    <>
      <div className="logo-container">
        <Link className="home-button" to="/">
          <img id="logo" alt="logo" src={logo} />
          viewr
        </Link>
      </div>
    </>
  );
};

export default HomeButton;
