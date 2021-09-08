import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Home from './views/home';
import Word from './views/hello';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/:word/:color?/:bgc?">
            <Word />
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
