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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseStateComponent
