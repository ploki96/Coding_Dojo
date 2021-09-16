import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res)
                console.log(id)
                setName(res.data.results.title);
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/authors/' + id +'/update', {
            name,
        })
            .then(res => 
                {console.log(res)
                history.push(`/`)})
            .catch(err => console.error(err));
        
        
    }
    
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/`}>Home</Link>
            <p>Edit this author</p>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name:</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;