import React,{useState} from 'react'

const TaskItem = ({task,deleteTask,toggleTask,editTask}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave=()=>{
    if(!editedText.trim()) return;
  
  editTask(task.id,editedText);
  setIsEditing(false);

  }

  return (
    <div style={{marginBottom:"10px"}}>
      
     <input 
     className='size-4'
     type="checkbox"
      checked={task.completed}
      onChange ={()=> toggleTask(task.id)}
      /> 

      {isEditing? ( 
      <>         
      <input 
      type="text"
      value={editedText}
      onChange={(e)=> setEditedText(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      </> 
      ):(
        <>
        <span className='text-lg font-semibold capitalize text-green-500 p-1 '
        style={{textDecoration: task.completed? "line-through" : "none",
                margin: "0px 7px",



        }}
        >{task.text}</span>

        <button className='text-md px-3 py-1.5 text-white bg-black rounded-3xl ml-3 active:scale-95 ' onClick={()=> setIsEditing(true)}>Edit</button>
        </>
      )}

       <button className='text-md px-3 py-1.5 ml-3 rounded-3xl text-white bg-black active:scale-95' onClick={()=> deleteTask(task.id)}>Delete</button>

    </div>
  );
};

export default TaskItem
