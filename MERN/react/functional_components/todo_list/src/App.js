import './App.css';
import Input from './components/Input';
import Task from './components/Task';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) =>{
    setTasks([...tasks, newTask]);
  } 

  const deleteTask = (idx) => {
    setTasks([...tasks.slice(0, idx)].concat(tasks.slice(idx+1)))
  }

  const completedTask = (idx) => {
    let currentTask = {...tasks[idx]};
    console.log("current task: "+currentTask.completed)
    console.log(idx)
    currentTask.completed = !currentTask.completed;
    console.log("current task: "+currentTask.completed)
    setTasks([...tasks.slice(0, idx), currentTask].concat(tasks.slice(idx+1)))
  }

  return (
    <div className="App">
      <Input task= {addTask}/>
      {
      tasks.map( (task, i) => {
        return <Task task={task} completedTask={completedTask} deleteTask={deleteTask} key={i} idx={i}/>
      })
      }
    </div>
  );
}

export default App;
