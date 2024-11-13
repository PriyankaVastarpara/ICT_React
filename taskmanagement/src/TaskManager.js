import React ,{Component}from "react";
import TaskList from "./TaskList";
import "./index.css";

class TaskManager extends Component{
    constructor(props){
        super(props);
    this.state={
        tasks:[
            {id:1,title:'Task 1',description:"develop the admin side of the project",completed: false },
        ],
        newTitle:'',
        newDescription:'',
    }
}

     handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
     };

     addTask=(e)=>{
        
        e.preventDefault();
        const { newTitle, newDescription, tasks } = this.state;
        if(newTitle && newDescription){
            const newTask={
                id:tasks.length+1,
                title:newTitle,
                description:newDescription
            };
            this.setState({
                tasks:[...tasks,newTask],
                newTitle:'',
                newDescription:'',
            });
        }
     };
     deleteTask = (taskId) => {
        this.setState((prevState) => ({
          tasks: prevState.tasks.filter((task) => task.id !== taskId)
        }));
      };

      toggleCompletion = (taskId) => {
        this.setState((prevState) => ({
          tasks: prevState.tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        }));
      };
     

    render(){
        const {tasks,newTitle,newDescription}=this.state;
        return(
            <div>
                <form onSubmit={this.addTask} className="form1">
                    <input 
                        type="text"
                        placeholder="Task Title"
                        name="newTitle"
                        value={newTitle}
                        onChange={this.handleInputChange}
                    />
                    <input 
                    type="text"
                    placeholder="task description"
                    name="newDescription"
                    value={newDescription}
                    maxLength={40}
                    onChange={this.handleInputChange}
                    />
                     <button type="submit">Add Task</button>
                </form>

                <TaskList tasks={tasks} deleteTask={this.deleteTask} toggleCompletion={this.toggleCompletion} />
            </div>
        )
    }
}
export default TaskManager;