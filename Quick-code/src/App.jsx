import React,{useState,useEffect} from 'react'
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

const App = () => {

  const[tasks,setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
 
  //load data from localStorage on first render

  useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  setTasks(savedTasks);
}, []);
  //save tasks to localStorage

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks]);
 
  //Add TAsk

  const addTask= (text) => {
  const newTask={
    id: Date.now(),
    text: text,
    completed:false,
  }

  setTasks([...tasks,newTask])
  };

  //Delete tasks

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=> task.id !==id));
  };

  //toggle complete

  const toggleTask =(id) =>{

  setTasks(
      tasks.map((task) =>
      task.id === id
      ? {...task,completed: !task.completed} : task
      )
    );
  };

  // Edit task

  const editTask = (id,newText) =>{
    setTasks(tasks.map((task)=>
    task.id === id? {...task,text:newText} : task
    )
  );
  };

  //filter

  const filteredTasks = tasks.filter((task)=>
    
    task.text.toLowerCase().includes(search.toLowerCase())
  )
   .filter((task) =>{
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return(
    <div className=" min-h-screen flex items-center justify-center               bg-gray-100   " style={{padding: "20px"}}>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <h1 className="text-3xl mb-3 font-bold leading-relaxed text-orange-500">
        Task Manager</h1>

      <TaskInput addTask={addTask} />

      <input 
      type="text"
      placeholder="Search tasks"
      className="px-4 py-2 border rounded w-full mt-1 mb-3"
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      />

      <div className="flex gap-2 mb-4">
        <button onClick={()=>setFilter("all")} className="px-3 py-1 border rounded">All</button>
        <button onClick={()=>setFilter("completed")} className="px-3 py-1 border rounded">Completed</button>
        <button onClick={()=>setFilter("pending")} className="px-3 py-1 border rounded">Pending</button>
      </div>
      
      <TaskList 
       tasks={filteredTasks}
       deleteTask={deleteTask}
       toggleTask={toggleTask}
       editTask={editTask}
      />
    </div>
    </div>
  );
};

export default App;

