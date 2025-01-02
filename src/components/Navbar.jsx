import React, { useState, useRef, useEffect } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { BsInstagram, BsMedium } from 'react-icons/bs'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'
import { SiGeeksforgeeks } from 'react-icons/si'
import { Menu, Clock } from 'lucide-react'
import DevanagariA from './Icon'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const lastUpdated = "31-12-2024"
  const dropdownRef = useRef(null)

  const toggleDropdown = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/anuj-agrawal380/", name: "LinkedIn" },
    { icon: FiGithub, href: "https://github.com/anujagrawal699", name: "GitHub" },
    { icon: SiLeetcode, href: "https://leetcode.com/anujagrawal699/", name: "LeetCode" },
    { icon: SiCodeforces, href: "https://codeforces.com/profile/anujagrawal380", name: "CodeForces" },
    { icon: BsMedium, href: "https://medium.com/@anujagrawal380/", name: "Medium" },
    { icon: SiGeeksforgeeks, href: "https://auth.geeksforgeeks.org/user/anujagraodtu", name: "GeeksforGeeks" },
    { icon: BsInstagram, href: "https://www.instagram.com/thriving.nd.vibin/", name: "Instagram" },
  ]

  return (
    <nav className='mb-20 flex flex-wrap items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' className='sm:-ml-4 md:-ml-3'><DevanagariA /></a>
      </div>
      <div className='flex items-center space-x-7'>
        <div className='hidden sm:flex items-center space-x-2 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>
          <Clock size={16} />
          <span>Last updated: {lastUpdated}</span>
        </div>
        <div className='relative' ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none md:hidden'
            aria-label="Toggle social links"
          >
            <Menu size={24} />
          </button>
          {isOpen && (
            <div className='absolute right-0 mt-2 p-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 md:hidden'>
              <div className='grid grid-cols-4 gap-2' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200'
                    title={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          )}
          <div className='hidden md:flex items-center justify-center gap-4 lg:gap-6 text-2xl'>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className='text-white-700 hover:text-gray-600 transition-colors duration-200'
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar