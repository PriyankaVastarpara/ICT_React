import React from 'react';
import TaskItem from './TaskItem';
function TaskList({tasks,deleteTask,toggleCompletion}){
    console.log("TaskList - Received deleteTask:", typeof deleteTask);
    return(
      <div className="task-container">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks to display.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompletion={toggleCompletion}
          />
        ))
      )}
    </div>
    )
}
export default TaskList;