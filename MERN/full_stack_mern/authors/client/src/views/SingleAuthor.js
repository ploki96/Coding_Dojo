import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

const SingleAuthor = (props) => {
    const [singleAuthor, SetSingleAuthor] = useState({});
    const {id} = useParams();

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=> SetSingleAuthor(res.data.results))  
            .catch(err =>console.log(err))
    }, [id]);

    return(
        <div>
            <p>{singleAuthor.name}</p>
            <Link to={`/${id}/update`}>Edit</Link>
        </div>
    )
}
export default SingleAuthor;