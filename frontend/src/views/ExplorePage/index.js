import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/UserNavBar";
import PhotoIndex from "../../components/Photos/PhotoIndex";
import "./ExplorePage.css";

const ExplorePage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <>
      <NavBar />
      <div className="explore-container">
        <h3>Explore</h3>
        {sessionUser && <PhotoIndex searchResults={[]}/>}
      </div>
    </>
  );
};

export default ExplorePage;
