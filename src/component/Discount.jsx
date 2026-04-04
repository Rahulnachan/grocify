import React from 'react'
import fruits from "../assets/full-basket-vegetable.png";
import Button from './Button'

const Discount = () => {
  return (
    <section 
      className='bg-gray-100 bg-right bg-contain bg-no-repeat'
      style={{ backgroundImage: `url(${fruits})` }}
    >
      <div className='flex flex-col md:flex-row max-w-[1400px] mx-auto px-6 md:px-10 py-10 gap-6'>
        
        {/* Discount label */}
        <span className='text-orange-500 text-6xl md:text-9xl font-bold transform md:-rotate-90 h-fit self-center  '>
          20%
        </span>

        {/* Text content */}
        <div className='max-w-[700px] text-center md:text-left'>
          <h1 className='text-4xl md:text-7xl text-gray-800 font-bold leading-tight'>
            First Order Discount
          </h1>
          <p className='my-6 text-gray-600 text-sm md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, modi praesentium. 
            Dolorem, labore recusandae, id omnis obcaecati aspernatur magni ea vitae provident 
            animi voluptate voluptatibus reprehenderit, quia sit fuga unde.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Button content="Get a Discount" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Discount
