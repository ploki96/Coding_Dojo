import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const Planets = (props) => {
    const {num} = useParams();
    const [planet, setPlanet] = useState({climate:"", terrain:"", surface_water:"", population:""});
    const history = useHistory();

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + num)
            .then(response => {
                console.log(response)
                setPlanet(response.data)
            })
            .catch(err => {
                console.log("error response:", err);
                history.push("/error");
            });
    }, [num])

    return(
        <div>
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water} of whatever unit this is supposed to be</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default Planets;