import React, {useState} from 'react'

const UseStateComponent = () => {
    
    const [tasks, setTasks] = useState([{key:1, task: "eating",}]);
    const [task, setTask] = useState("");
    
    const handleInput = (e) => {
        e.preventDefault();
        setTasks([...tasks, { key: new Date().getTime().toString(), task}])
        console.log(tasks);
        setTask("")
    }

    const deleteTask = (key)=> {
        const newTasks = tasks.filter((oneTask)=>oneTask.key!==key);
        setTasks(newTasks);
    }

    return (
        <div>
            <form onSubmit = {handleInput}>
                <input type="text"
                placeholder="Enter task"
                value={task}
                 onChange ={(e)=>setTask(e.target.value)}/>
                
            <button type='submit'>Add Task</button>
            </form>
            
            {
                tasks.map((oneTask)=>{
                    return (
                        <div key ={oneTask.key}>
                            <h4>{oneTask.task}</h4>
                            <button onClick={()=>deleteTask(oneTask.key)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseStateComponent
