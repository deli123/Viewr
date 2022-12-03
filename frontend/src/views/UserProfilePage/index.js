import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/UserNavBar";
import UserProfileBody from "../../components/UserProfile/UserProfileBody";
import UserProfileHeader from "../../components/UserProfile/UserProfileHeader";
import { getPhotos } from "../../store/reducers/photos_reducer";
import { fetchUser, getAuthor } from "../../store/reducers/users_reducer";
import "./UserProfilePage.css"

const UserProfilePage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [userId]);

  const user = useSelector(getAuthor);
  const photos = useSelector(getPhotos);

  return (
    <>
      <NavBar />
      {user && photos && (
        <>
          <UserProfileHeader />
          <UserProfileBody />
        </>
      )}
      {!user && (
        <div className="explore-container no-user-msg">
          <h3>This user does not exist!</h3>
        </div>
      )}
    </>
  );
};

export default UserProfilePage;
