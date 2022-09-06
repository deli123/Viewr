import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import SplashNavBar from "../../components/NavBar/SplashNavBar";
import "./SplashPage.css";
import BackgroundSlider from "../../lib/BackgroundSlider";
import splash1 from "../../assets/images/splash1.jpg";
import splash2 from "../../assets/images/splash2.jpg";
import splash3 from "../../assets/images/splash3.jpg";
import splash4 from "../../assets/images/splash4.jpg";
import splash5 from "../../assets/images/splash5.jpg";
import Footer from "../../components/Footer";

const SplashPage = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/explore" />;

  return (
    <>
      <div className="slideshow">
        <BackgroundSlider
          images={[splash1, splash2, splash3, splash4, splash5]}
          duration={5}
          transition={0.5}
        />
        <SplashNavBar />
        <div className="middle-text">
          <h1>Find your inspiration.</h1>
          <h3>
            Join the Viewr community, home to tens of billions of imaginary
            photos and zero groups.
          </h3>
          <Link className="start-button" to="/signup">
            Start for free
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SplashPage;
