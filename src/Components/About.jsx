import React from 'react'

const About = () => {
  return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>
            <p className='text-xl mt-20'>
                I am Shivansh Goel working in Coforge since 2021. I have completed my B.Tech in Computer Science and Engineering from Noida Institute of Engineering and Technology (NIET).  
            </p>
          
            <p className='text-xl'>I have worked on both Frontend and Backend functionalities using Angular, Hava springboot.</p>
        </div>
    </div>
  )
}

export default About