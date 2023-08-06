import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi';
import shivansh from '../assets/shivansh.png';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
   <div className='max-w-screen-lg mx-auto flex flex-col h-full justify-center items-center px-4 md:flex-row'>
   <div className='flex flex-col justify-center h-full '>
    <h2 name='devName' className='text-4xl sm:text-7xl text-white font-bold'>
            I'm a Full Stack Developer 
        </h2>
        <p className='text-gray-500 py-4 max-w-md'>
            I have 2 years of developing and designing.
            Currently, I love to work on web and mobile applications using technologies like
            Springboot, react, React Native, Angular and Tailwind.  
        </p>
  
    <div>
        <button className='group text-white w-fit px-6 py-3 flex border-1 border-blue-950 
        rounded-md items-center justify-center bg-gradient-to-r from-blue-800 to-blue-950
         cursor-pointer'>
            Portfolio
           <span className='ml-1 group-hover:rotate-90 duration-300'>
           <BiRightArrowAlt size={25}/>
           </span>
        </button>
    </div>
    </div>
    <div>
        <img src={shivansh} alt='My Picture' className=' rounded-2xl mx-auto w-2/3 md:w-full'/>
    </div>
   </div>
    </div>
  )
}

export default Home