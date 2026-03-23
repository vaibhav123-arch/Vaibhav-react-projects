import React,{useState} from 'react'

const TaskInput = ({addTask}) => {
   
   const [text, setText] = useState("");

   const handleAdd = ()=>{
    if(!text.trim()) return;

    addTask(text);
    setText("");
   }


  return (
    <div>
        <input
        className="border-2 border-yellow-400 mt-3 p-1 rounded-lg" 
        type="text"
        value={text}
        onChange={(e)=> setText(e.target.value)}/><br/>

        <button className="bg-gray-700 rounded-full text-white px-4 py-2 mt-3 active:scale-95 active:bg-blue-950 cursor-pointer mb-2" onClick={handleAdd}>Add</button>
      
    </div>
  )
}

export default TaskInput

  

