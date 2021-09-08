import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const People = (props) => {
    const {num} = useParams();
    const [person, setPerson] = useState({name: "", height:"", mass:"", hair_color:"", skin_color:""});

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + num)
            .then(response => {
                console.log(response)
                setPerson(response.data)
            })
    }, [num])

    return(
        <div>
            <h2>{person.name}</h2>
            <p>Height: {person.height} cm</p>
            <p>Mass: {person.mass} kg</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
        </div>
    )
}

export default People;