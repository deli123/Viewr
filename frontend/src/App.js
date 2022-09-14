import { Redirect, Route, Switch } from "react-router-dom";
import AuthFormPage from "./views/AuthFormPage";
import ExplorePage from "./views/ExplorePage";
import PhotoFormPage from "./views/PhotoFormPage";
import PhotoShowPage from "./views/PhotoShowPage";
import SearchResultsPage from "./views/SearchResultsPage";
import SplashPage from "./views/SplashPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/login" component={AuthFormPage} />
        <Route exact path="/signup" component={AuthFormPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/photos/upload" component={PhotoFormPage} />
        <Route exact path="/photos/:photoId" component={PhotoShowPage} />
        <Route exact path="/search/:query" component={SearchResultsPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
