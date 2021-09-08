import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Header = (props) => {
    const [type, setType] = useState("planets");
    const [searchID, setSearchID] = useState();
    const history = useHistory();

    const newUrl = (e) => {
        e.preventDefault();
        console.log(type);
        console.log(searchID);
        history.push(`/${type}/${searchID}`);
    }


    return (
        <div>
            <form onSubmit={newUrl}>
                <label>Search for</label>
                <select onChange={(e) => setType(e.target.value)}>
                    <option value="planets">Planets</option>
                    {/* <option value="spaceships">Spaceships</option>        nevermind. Considered this but too much work
                    <option value="vehicles">Vehicles</option> */}
                    <option value="people">People</option>
                    {/* <option value="films">Films</option>
                    <option value="species">Species</option> */}
                </select>
                <label>ID</label>
                <input type="number" onChange={(e) => setSearchID(e.target.value)}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Header;