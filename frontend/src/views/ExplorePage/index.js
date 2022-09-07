import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/UserNavBar";
import PhotoIndex from "../../components/PhotoIndex";

const ExplorePage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <>
      <NavBar />
      <div className="photo-index">
        <h3>Explore</h3>
        <PhotoIndex />
      </div>
    </>
  );
};

export default ExplorePage;
