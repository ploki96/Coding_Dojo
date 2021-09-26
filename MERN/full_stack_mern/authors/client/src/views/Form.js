import React, { useState } from 'react'
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';

const Form = (props) => {
    const history = useHistory();

    const [name, setName] = useState(""); 

    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/authors/new', {
            name,
        })
            .then(res=>
                {console.log(res);
                
                if (res.data.results){
                    setName('');
                    history.push('/');
                }
                else {
                    console.log(res)
                    // if (!res.data.err.errors) {
                    //     console.log('name not unique')
                    //     setErrors({name: {message: 'Name must be unique'}})
                    // }
                    // else {
                    setErrors(res.data.err.errors);
                    // }
                }
                })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/allauthors`}>Home</Link>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form;