import { useLocation } from "react-router-dom";
import LoginForm from "../../components/NavBar/LoginForm";
import SignupForm from "../../components/NavBar/SignupForm";
import NavBar from "../../components/NavBar/UserNavBar";
import background from "../../assets/images/login-bg.jpg";
import "./AuthFormPage.css";

const AuthFormPage = () => {
  const location = useLocation();
  const isLoginForm = location.pathname.includes("login") ? true : false;

  return (
    <>
      <NavBar />
      <div className="form-container">
        <img alt="background" src={background} />
          {isLoginForm ? <LoginForm /> : <SignupForm />}
      </div>
    </>
  );
};

export default AuthFormPage;
