import React from 'react';
import './App.css';
const TaskItem = ({ task, deleteTask,toggleCompletion }) => {
    console.log("TaskItem - Received deleteTask:", typeof deleteTask);
   
    return (
      <div className={`taskitems ${task.completed ? "completed" : ""}`}>
      <input 
        type='checkbox' 
        checked={task.completed} 
        onChange={() => toggleCompletion(task.id)} 
      /> 
      <span>{task.title} - {task.description}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
    );
  };
export default TaskItem;