import React from 'react'
import {GrLinkedin} from 'react-icons/gr';
import {LuMails} from 'react-icons/lu';
import {BsFillPersonLinesFil} from 'react-icons/bs';

const SocialLinks = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
     <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500'>
            <a href='' className='flex justify-between items-center w-full text-white'>
                <>
                LinkedIn <GrLinkedin size={30}/>
                </>
            </a>
        </li>
     </ul>
    </div>
  )
}

export default SocialLinks