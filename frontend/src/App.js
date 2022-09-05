import { Redirect, Route, Switch } from "react-router-dom";
import LoginFormPage from "./views/LoginFormPage";
import SignupFormPage from "./views/SignupFormPage";
import ExplorePage from "./views/ExplorePage";
import SplashPage from "./views/SplashPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/login" component={LoginFormPage} />
        <Route exact path="/signup" component={SignupFormPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
