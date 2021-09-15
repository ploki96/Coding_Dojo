import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useHistory, useParams, Link} from 'react-router-dom';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.results))
    }, [products])

    // const onClickHandler = (e) => {
    //     e.preventDefault();
    //     history.push(`/products/${e.target.id}`)
    // }

    return (
        <div>
            <h1>All Products</h1>
            {
                products.map ((product, i) => {
                    return (
                        <div>
                            <Link to={`/${product._id}`} key={product._id}>{product.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts;