import React, { useState } from 'react'
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';

const Form = (props) => {
    const history = useHistory();

    const [name, setName] = useState(""); 

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {
            name,
        })
            .then(res=>
                {console.log(res)
                setName('')
                history.push('/')
                })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/`}>Home</Link>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form;