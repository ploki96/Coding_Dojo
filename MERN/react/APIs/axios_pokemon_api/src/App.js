import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const onClickHandler = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then (response => {
        setPokemon(response.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <button onClick={onClickHandler}>Fetch Pikachus</button>
      <ul>
        {
          pokemon.map(( pikachu, i) => {
            return <li key={i}>{pikachu.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
