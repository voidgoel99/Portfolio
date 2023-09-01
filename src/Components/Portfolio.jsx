import React from 'react'

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            name: 'Commerce Portal',
            src: '/commerce.png'
        },
        {
            id: 2,
            name: 'SSC CGL',
            src: '/ssc_cgl.png'
        },
        {
            id: 3,
            name: 'IIT-JEE Preparations',
            src: '/iit.png'
        },
        {
            id: 4,
            name: 'MBA Entrance',
            src: '/mba.png'
        },
        {
            id: 5,
            name: 'Current Affairs',
            src: '/current.png'
        }
    ]
    return (
        <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
            <div  className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>
                        Portfolio
                    </p>
                    <p className='text-xl my-10'>
                        Check out some of my work here.
                    </p>
                </div>
                <div className='flex flex-row'>

                    {projects.map((proj) => (
                        <div key={proj.id} className='p-4 bg-white border-2 border-white rounded-md mx-2'>
                            <img src={proj.src} alt="" width={40} height={40} />
                        </div>

                    ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Portfolio