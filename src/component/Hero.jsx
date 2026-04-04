import React from 'react'
import Grocery from '../assets/grocery.jpg'
import Button from './Button'
const Hero = () => {
    return (
        <section>
            <div className=' flex items-center max-w-[1400px] mx-auto px-10  md:flex-row flex-col pt-26 min-h-[-100px]'>
                <div className=' flex-1 '>
                    <span className=' bg-orange-100 text-orange-500 rounded-full text-lg px-5 py-2'> 
                        Export Best Quality ...
                    </span>
                    <h1 className='md:text-6xl/16 text-5xl/14 mt-2 font-bold   '>Tasty Organic <span className='text-orange-500'>Fruits </span> & <span className='text-orange-500'> Vegetable</span> In Your city </h1>
                    <p className=' text-lg text-gray-600 p-2 mt-2 max-w-[530px]:'>
                        Bread for a high content of beneficial substance 
                    </p>
                    <div>
                        <Button content ="Shop  Now"/>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={Grocery} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero
