import React, { useState } from 'react'
import {X} from 'lucide-react'
const App = () => {
  const submitHandler=(e)=>{
   
    e.preventDefault()
   
   const copyTask = [...task]

   copyTask.push({title,details})
   setTask(copyTask)

   setTitle('')
   setDetails('')
  }

  const deleteNote= (idx) =>{
  const copyTask = [...task];

  copyTask.splice(idx,1)

  setTask(copyTask)
  }
   
   const [details, setDetails] = useState('');

   const[title,setTitle] = useState('');

   const [task, setTask] = useState([]);
  
  return (
    
    <div className='h-screen lg:flex bg-blue-900 text-white'>


      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex items-start lg:w-1/2 flex-col p-10 gap-4'>
          
          <h1 className='text-3xl font-bold'>Add Notes</h1>

          
          {/* First input */}
          <input type='text' 
          className='px-5 py-2 border-2 font-medium outline-none rounded w-full ' placeholder='Write Notes Heading'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          
          {/* Detailed input */}
        <textarea type='text' 
        className='px-5 py-2 h-32 flex items-start flex-row font-medium border-2 outline-none rounded w-full ' 
        placeholder='Write Details Here'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />
 
        <button 
        className='bg-white active:bg-gray-700 active:scale-95 text-black font-medium px-5 py-2 border-2 rounded w-full'>
          Add Note
          </button> 
      
      </form>      
      <div className=' lg:border-l-4 lg:w-1/2 p-11'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-6 mt-6 h-full overflow-auto'>
          {task.map(function(elem,idx){
            
           return <div key={idx} className="relative h-55 w-42 rounded-2xl bg-[url('https://www.printabulls.com/wp-content/uploads/2022/07/Printable-Note-Pages-6-scaled.jpg')] bg-cover py-13 px-5 text-black contain-content">

            <h2 className='absolute top-1 right-1 bg-red-500 rounded-full p-1 text-xs active:scale-95 cursor:pointer active:bg-amber-700' onClick={()=>{
              deleteNote(idx)
            }}><X strokeWidth={3} /></h2> 
            <h3 className='font-bold text-xl leading-tight'>{elem.title}</h3>
            <p className='text-gray-600 font-medium leading-tight mt-2'>{elem.details}</p>
           
           
           </div>
          })}
        
        </div>
      </div>
      
    </div>
  )
}

export default App
