import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/UserNavBar";

const ExplorePage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <>
      <NavBar />
      <div className="photo-index">
        <h3>Explore</h3>
      </div>
    </>
  );
};

export default ExplorePage;
