import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";


function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks]);

  const addTask = (task) => {
      setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
      const newtask = [...tasks];
      newtask[index] = updatedTask;
      setTasks(newtask);
  }

  const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index));
  }

  return (
    <div>
      <h1>Task foucs</h1>
      <p>Our final project about TaskManager</p>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks}
      updateTask = {updateTask} deleteTask = {deleteTask} />
      <Progresstracker  tasks = {tasks}/>
      <button>Clear All Tasks</button>
    </div>
  )
}

export default App;