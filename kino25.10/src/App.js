import './App.css';
import MenuTop from "./components/design/menuTop";
import PageHome from "./components/pages/pageHome";
import PageContact from "./components/pages/pageContact";
import Footer from './components/design/footer';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PageError from "./components/pages/pageError";
// import WidgetActorDOB from "./components/imdb/dob/widgetActorDOB";
import PageAlbum from "./components/pages/pageAlbum";

function App() {
  return (
    <Router className="App">
      <MenuTop></MenuTop>
        <Switch>
            <Route path="/" exact>
                <PageHome></PageHome>
            </Route>
            <Route path="/contact">
                <PageContact></PageContact>
            </Route>
            <Route path="/album">
                <PageAlbum></PageAlbum>
            </Route>
            <Route>
                <PageError error={"404 Not Found"}></PageError>
            </Route>
        </Switch>
		  <Footer></Footer>
    </Router>
  );
}

export default App;
