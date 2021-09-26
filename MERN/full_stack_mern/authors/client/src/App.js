import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import {BrowserRouter,Switch, Route, Link} from "react-router-dom"
import SingleAuthor from './views/SingleAuthor';
import Update from './views/Update';
import Form from './views/Form';
import AllAuthors from './views/AllAuthors';

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
          <Route exact path = "/allauthors">
            <AllAuthors />
          </Route>
          <Route exact path="/add">
            <Form />
          </Route>
          <Route exact path= "/:id">
            <SingleAuthor />
          </Route>
          <Route exact path= "/:id/update">
            <Update />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
