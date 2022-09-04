import { Redirect, Route, Switch } from "react-router-dom";
import LoginFormPage from "./views/LoginFormPage";
import SignupFormPage from "./views/SignupFormPage";
import ExplorePage from "./views/ExplorePage";
import SplashPage from "./views/SplashPage/SplashPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/login" component={LoginFormPage} />
        <Route path="/signup" component={SignupFormPage} />
        <Route path="/explore" component={ExplorePage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
