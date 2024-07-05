import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { BsInstagram, BsMedium } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'
import { SiGeeksforgeeks } from 'react-icons/si'
import DevanagariA from './Icon'
const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
     <div className='flex flex-shrink-0 items-center'>
<a href='/'><DevanagariA /></a>
     </div>
     <div className='m-8 flex items-center justify-center gap-4 lg:gap-6 text-2xl '>
     <a href="https://www.linkedin.com/in/anuj-agrawal380/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/anujagrawal699" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
        <a href="https://medium.com/@anujagrawal380/" target="_blank" rel="noopener noreferrer">
          <BsMedium />
        </a>
        <a href="https://leetcode.com/anujagrawal699/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/anujagraodtu" target="_blank" rel="noopener noreferrer">
          <SiGeeksforgeeks />
        </a>
        <a href="https://www.instagram.com/thriving.nd.vibin/" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
     </div>
  </nav>
}

export default Navbar