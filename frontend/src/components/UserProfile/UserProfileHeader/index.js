import { getPhotos } from "../../../store/reducers/photos_reducer";
import { getAuthor } from "../../../store/reducers/users_reducer";
import { FaUserCircle } from "react-icons/fa";
import "./UserProfileHeader.css";
import { getYear } from "../../../util/dateUtil";
import { useSelector } from "react-redux";

const UserProfileHeader = () => {
  const user = useSelector(getAuthor);
  const photos = useSelector(getPhotos);

  return (
    <>
      <div className="profile-banner">
        {user && (
          <div className="profile-header">
            <div className="profile-picture-container">
              <FaUserCircle className="profile-picture" color="white" />
            </div>
            <div className="user-title-container">
              <h1>{`${user.fname} ${user.lname}`}</h1>
              <div className="user-name-info">
                <p>{user.username}</p>
                <div className="user-personal-stats">
                  <div className="user-num-photos">
                    {photos && (
                      <p>
                        {photos.length !== 1
                          ? `${photos.length} Photos`
                          : `1 Photo`}
                      </p>
                    )}
                  </div>
                  <div className="user-join-date">
                    {user && <p>{`Joined ${getYear(user.createdAt)}`}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfileHeader;
