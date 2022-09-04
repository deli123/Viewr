import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Navigation from "../../components/NavBar/Navigation";

export default function ExplorePage() {
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <>
      <h1>Explore Page</h1>
      <Navigation />
    </>
  );
}
