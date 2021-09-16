import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useHistory, useParams, Link} from 'react-router-dom';

const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const history = useHistory();
    const { removeFromDom } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data.results))
    }, [authors])

    // const onClickHandler = (e) => {
    //     e.preventDefault();
    //     history.push(`/authors/${e.target.id}`)
    // }
    
    const deleteAuthor = (_id) => {
        axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
            .then(res => {
                removeFromDom(_id)
                history.push('/')
            })
            .catch(err => console.error(err));
    }

    const editAuthor = (_id) => {
        history.push(`/${_id}/update`)
    }

    return (
        <div>
            <h1>All Authors</h1>
            <Link to={`/add`}>Add an Author</Link>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Actions Available</th>
                </thead>
            {
                authors.map ((author, i) => {
                    return (
                        <tr>
                            <td>{author.name}</td>
                            <td>
                            <button onClick={(e) =>editAuthor(author._id)}>Edit</button>
                            <button onClick={(e) =>deleteAuthor(author._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
            </table>
        </div>
    )
}

export default AllAuthors;