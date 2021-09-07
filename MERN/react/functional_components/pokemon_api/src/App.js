import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchAPI = (e) => {
    e.preventDefault();
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(response => response.json())
      .then(response => {
        setPokemon(response.results)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <button onClick={fetchAPI}>Fetch Pikachus</button>
      <ul>
        {pokemon.map ( (pikachu, i) => {
          return <li key={i}>{pikachu.name}</li>
        })
        }
      </ul>
    </div>
  );
}

export default App;
