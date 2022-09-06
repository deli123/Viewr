import HomeButton from "../HomeButton";
import PersonalLinks from "../PersonalLinks";
import "./UserNavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="user-nav-container">
        <div className="user-nav-buttons">
          <HomeButton />
          <PersonalLinks />
          <div className="user-links"></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
