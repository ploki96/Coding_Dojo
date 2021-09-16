import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useHistory, useParams, Link} from 'react-router-dom';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const history = useHistory();
    const { removeFromDom } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.results))
    }, [products])

    // const onClickHandler = (e) => {
    //     e.preventDefault();
    //     history.push(`/products/${e.target.id}`)
    // }
    
    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
            .then(res => {
                removeFromDom(_id)
                history.push('/')
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>All Products</h1>
            {
                products.map ((product, i) => {
                    return (
                        <div>
                            <Link to={`/${product._id}`} key={product._id}>{product.title}</Link>
                            <button onClick={(e) =>deleteProduct(product._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts;