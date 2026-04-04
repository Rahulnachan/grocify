import React from 'react'

const Heading = (props) => {
  return (
   
      <div className='w-fit  mx-auto'>
        <h1 className=' text-gray-700  md:text-5xl text-2xl font-bold  '><span className=' text-orange-500 mr-2'>{props.highlight}</span>  
        {props.heading}</h1>
      <div className=' w-34 h-1 bg-orange-300 mt-5 ml-auto rounded-full'> </div>
      </div>
    
  )
}

export default Heading
