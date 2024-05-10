import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-500 ram h-16 flex justify-between items-center'>
      {/* <img className='w-40 h-16' src="./logowbc.png" alt="logowbc" /> */}
      <h1>StudySpotlight</h1>
      <div>
        <ul className='flex justify-center items-center'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
