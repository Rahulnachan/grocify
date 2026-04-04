import React from 'react'

const Button = (props) => {
  return (
    
      <button className='  bg-orange-400 rounded-full px-5 py-2 font-bold text-white text-lg hover:scale-105 cursor-pointer'>
        {props.content}
      </button>
    
  )
}

export default Button
