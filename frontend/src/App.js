import { Redirect, Route, Switch } from "react-router-dom";
import AuthFormPage from "./views/AuthFormPage";
import ExplorePage from "./views/ExplorePage";
import SplashPage from "./views/SplashPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/login" component={AuthFormPage} />
        <Route exact path="/signup" component={AuthFormPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
