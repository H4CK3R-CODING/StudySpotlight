import React from 'react'

import NavBtn from './NavBtn'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const data = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Register",
      to: "/register",
    },
    
  ]
  return (
    <div className='static h-16 '>
      <div className='fixed w-full h-16 flex justify-between items-center bg-gradient-to-r from-[#50FFB1] to-[#4FB286]'>
      {/* <img className='w-40 h-16' src="./logowbc.png" alt="logowbc" /> */}
      <Link to={"/"} className='text-white font-semibold italic p-2 m-2 text-3xl'>StudySpotlight</Link>
      <div>
        <ul className='flex justify-center items-center'>
          {
            data.map((ele,idx)=>{
              return <NavBtn list={ele} key={idx}/>
            })
          }
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar
