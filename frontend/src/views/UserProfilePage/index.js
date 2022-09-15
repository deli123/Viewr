import NavBar from "../../components/NavBar/UserNavBar";
import UserProfileBody from "../../components/UserProfile/UserProfileBody";
import UserProfileHeader from "../../components/UserProfile/UserProfileHeader";

const UserProfilePage = () => {
  return (
    <>
      <NavBar />
      <UserProfileHeader />
      <UserProfileBody />
    </>
  );
};

export default UserProfilePage;
