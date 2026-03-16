import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [UserData, setUserData] = useState([])
  const [index, setindex] =useState(1)

  const getdata = async ()=>{
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
   setUserData(response.data);
  
  }

  useEffect(()=>{
   getdata();
  },[index]);
   
  let printUserData = <h3 className=' text-xl text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>...Loading</h3>
  if(UserData.length>0){
    printUserData = UserData.map(function(elem,idx){
       return <div key= {idx}>
       <Card elem={elem} />
       </div>  
    })
  }

  return (
    <div className='bg-blue-950 h-screen w-full p-8 text-white overflow-auto'>
         
         <div className='flex h-[95%] flex-wrap gap-4 p-2'>
          {printUserData}
        </div>

        <div className='flex justify-center gap-6 items-center'>
          <button 
          style={{opacity: index ==1?0.5 : 1}}
          className='bg-amber-500 text-lg font-semibold rounded py-2 px-4 mt-2 active:scale-95 cursor-pointer'
          onClick={()=>{
            if(index>1){
            setindex(index-1)
            setUserData([])
            }
          }}>
            Prev
          </button>
           <h2 className='text-lg font-semibold'>Page {index}</h2>
          <button 
          className='bg-amber-500 text-lg font-semibold rounded py-2 px-4 mt-2 active:scale-95 cursor-pointer'
           onClick={()=>{
            setindex(index+1)
            setUserData([])
           }}>
            Next
            </button>
        </div>
        
        </div>
   
  )
}

export default App
App