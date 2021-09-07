import React, {useState} from 'react';

const Input = (props) => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask({title: e.target.value, completed: false})
    } 

    const newTask = (e) => {
        e.preventDefault();
        props.task(task)  
    }


    return(
        <div>
            <form onSubmit={newTask}>
                <label>Task</label>
                <input type="text" onChange={onChange} name="title"/>
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default Input;