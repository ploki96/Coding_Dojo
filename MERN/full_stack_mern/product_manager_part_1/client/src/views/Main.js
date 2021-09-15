import React, { useEffect, useState } from 'react'
import Productform from '../components/Productform';
import axios from 'axios';
import AllProducts from '../components/AllProducts';

export default () => {
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))  
            .catch(err =>console.log(err) )
    }, []);
    return (
        <div>
            <Productform />
            <AllProducts />
        </div>
    )
}

// Don't be judgemental here Jess/Jordan
// You two J's
// Hah "experts"
// Mike, if you're reading this, please ignore.