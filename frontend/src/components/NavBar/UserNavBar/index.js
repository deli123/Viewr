import { useSelector } from "react-redux";
import HomeButton from "../HomeButton";
import ProfileButton from "../Navigation/ProfileButton";
import PersonalLinks from "../PersonalLinks";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./UserNavBar.css";
import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <nav className="user-nav-container">
        <div className="user-nav-buttons">
          <div className="home-links">
            <HomeButton />
            {sessionUser ? (
              <>
                <Link className="you-explore" to={`/users/${sessionUser.id}`}>
                  You
                </Link>
                <Link className="you-explore" to="/explore">
                  Explore
                </Link>
              </>
            ) : (
              ""
            )}
          </div>
          <PersonalLinks />
          <div className="user-links">
            {sessionUser ? (
              <>
                <SearchBar />
                <div className="profile-upload-container">
                  <Link to="/photos/upload">
                    <FaCloudUploadAlt fontSize={"36px"} color={"white"} />
                  </Link>
                  <ProfileButton user={sessionUser} />
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
