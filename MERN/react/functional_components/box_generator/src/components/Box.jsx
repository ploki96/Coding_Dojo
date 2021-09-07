import React, { useState } from 'react';

const Box = props => {
    
    const [boxes, setBoxes] = useState([]);

    const addbox = (e) => {
        e.preventDefault();
        const box = {
            color: e.target[0].value,
            width: e.target[1].value,
            height: e.target[1].value
        }
        setBoxes([...boxes, box])
    }


    return(
        <div>
            <form onSubmit={addbox}>
                <label>Color</label>
                <input type="text" name="color"/>
                <label>Size</label>
                <input type="number" name="size"/>
                <input type="submit" value="Add"/>
            </form>
            <div>
            {
                boxes.map( (box, i) =>{
                let styles = {
                    backgroundColor: box.color,
                    width: box.width +'px',
                    height: box.height +'px',
                    display: 'inline-block'
                }
                    
                return <div style={styles} key={i}/>
                })
            }
            </div>
        </div>
    );
}
export default Box;

  
