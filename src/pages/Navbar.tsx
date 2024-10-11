import React from 'react'
import Logo from '../app/Assets/Logo.png'
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faFire, faBolt, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons' // Import the icons you need
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <header className="w-full h-16 bg-gray-900 flex items-center p-5 border-b border-gray-600">
        {/* Logo */}
        <div className='w-1/3'>
        <a href='/'>
          <Image src={Logo} className='w-48' alt='' />
        </a>
        </div>

        {/* Search Input */}
        <div className="flex flex-grow items-center  justify-center rounded-md max-w-sm pl-2 gap-3 border  bg-white">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='h-7 text-black '/>
          <input type="text" placeholder="Search Anything"
            className="rounded-md w-full h-8 px-2 border-none bg-none"/>
        </div>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-6 ml-auto">
          {/* New Post Button */}
          <button
            className="bg-white text-black w-24 h-8 hover:bg-gray-300 rounded-md font-medium">
            New Post
          </button>

          {/* Notification Bell */}
          <button
            className="bg-white text-black w-10 h-8 hover:bg-gray-300 rounded-md font-medium flex justify-center items-center">
            <FontAwesomeIcon icon={faBell} className='h-4'/>
          </button>

          {/* Fire and Bolt Icons with Counters */}
          <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-md text-white">
            <button className="bg-gray-300 w-7 h-7 rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={faFire} className='h-5 text-pink-600'/>
            </button>
            <span>15</span>
            <button className="bg-violet-600 w-7 h-7 rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={faBolt} className='h-4'/>
            </button>
            <span>30</span>
          </div>

          {/* Login Button */}
          <button className="bg-white text-black w-20 h-8 hover:bg-gray-300 rounded-md">
            LogIn
          </button>
        </div>
      </header>
      <Sidebar />
    </div>
  )
}

export default Navbar
