import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {BrowserRouter,Switch, Route, Link} from "react-router-dom"
import Planets from './views/planets';
import People from './views/people';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/people/:num">
            <People/>
          </Route>
          <Route exact path="/planets/:num">
            <Planets/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
