import React from 'react';
import { useParams } from 'react-router';

const Word = (props) => {
    const {word, bgc, color} = useParams();

    const styles = {
        backgroundColor: bgc,
        color: color
    }
    return (
        <div>
            {
                isNaN(word) ? 
                <h1 style={styles}>The word is {word}</h1>:
                <h1>The number is {word}</h1>
            }
        </div>
    )
}

export default Word;