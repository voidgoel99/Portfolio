import React from 'react'
import { GrLinkedin, GrFacebook } from 'react-icons/gr';
import { LuMails } from 'react-icons/lu';
import { BsFillFilePersonFill } from 'react-icons/bs';

const SocialLinks = () => {
  const social = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <GrLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/shivansh-goel-272ba6166/",
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Facebook <GrFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/shivansh.goel.52",
      style: 'rounded-br-md'
    },
    {
      id: 3,
      child: (
        <>
          Mail <LuMails size={30} />
        </>
      ),
      href: "mailTo:goel.shivansh98@gmail.com",
      style:'rounded-br-md',
    },
    {
      id:4,
      child:(
        <>
        Resume <BsFillFilePersonFill size={30}/>
        </>
      ),
     href:"./Resume.pdf",
     style:'rounded-br-md',
     download:true
    },
  ]
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {
          social.map((link)=>(
            <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-500" + " " +link.style}>
          <a href={link.href} className='flex justify-between items-center w-full text-white' rel="noreferrer" target='_blank' download={link.download}>
               {link.child}
          </a>
        </li>
          ))
        }
        
      </ul>
    </div>
  )
}

export default SocialLinks