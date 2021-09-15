import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import axios from 'axios';
import { useEffect } from 'react';
import {BrowserRouter,Switch, Route, Link} from "react-router-dom"
import SingleProduct from './views/SingleProduct';

function App() {
  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <Main />
          </Route>
          <Route exact path= "/:id">
            <SingleProduct />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
