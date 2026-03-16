import React from 'react'

const RightCardContent = (props) => {
  return (
       <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
       <h2 className='text-xl font-medium bg-white rounded-full h-11 w-11 flex justify-center items-center'>{props.id+1}</h2>
       <div>
        <p className='text-shadow-2xs text-white mb-14 text-lg leading-relaxed '>Prime customers, that have access to bank credit and are satisfied with the current product.</p>
        <div className='flex justify-between'>
          <button style={{backgroundColor:props.color}} className='px-5 py-2 rounded-full text-lg font-semibold text-white'>{props.tag}</button>
          <button style={{backgroundColor:props.color}} className=' px-3 py-2 rounded-full text-lg font-semibold text-white'><i className="ri-arrow-right-line"></i></button>

        </div>
       </div>
     </div>
    
  )
}

export default RightCardContent
