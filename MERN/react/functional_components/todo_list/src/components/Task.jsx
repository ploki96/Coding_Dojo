import React from 'react';

const Task = (props) => {
    // const checkbox = (e) => {
    //     if 
    // } 

    
    return(
        <div className="task">
            {props.task.completed === false ? 
                <span >{props.task.title}</span>:
                <span className="checked">{props.task.title}</span>}
            <input type="checkbox" onClick={() => props.completedTask(props.idx)}/>
            <button onClick={() => props.deleteTask(props.idx)}>Delete</button>
        </div>
    )
}

export default Task;