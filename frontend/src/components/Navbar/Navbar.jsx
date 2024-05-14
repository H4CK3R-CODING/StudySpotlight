import React, { useRef } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import NavBtn from './NavBtn'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../../Style/Navbar.css";

const Navbar = () => {
  const navref = useRef();

  const handleNavResponsive = () =>{
    navref.current.classList.toggle("responsive-nav"); 
  }

  const data = [
    {
      label: "Home",
      to: "/",
      col: "bg-blue-500"
    },
    {
      label: "About",
      to: "/about",
      col: "bg-blue-500"
    },
    {
      label: "Sign In",
      to: "/signin",
      col: "bg-blue-500"
    },
    {
      label: "Register",
      to: "/register",
      col: "bg-blue-500"
      // col: "bg-[#008080]"
    },
    // {
    //   label: "Logout",
    //   to: "",
    //   col: "bg-[#FF5733]",
    //   onclick: async ()=>{
    //     await axios.get("/api/v1/user/logout");
    //   }
    // },
    
  ]

  return (
    <div className='static h-16'>
      <div className='fixed z-50 w-full h-16 flex justify-between items-center bg-gradient-to-r from-[#50FFB1] to-[#4FB286]'>
        {/* <img className='w-40 h-16' src="./logowbc.png" alt="logowbc" /> */}
        <Link to={"/"} className='text-white font-semibold italic p-2 m-2 text-3xl'>StudySpotlight</Link>
        <div ref={navref} className='nav'>
          <ul onClick={(event)=>{
            if(event.target.nodeName == 'A'){
              handleNavResponsive();
            }
          }} className='flex justify-center items-center flex-col md:flex-row'>
            {
              data.map((ele,idx)=>{
                return <NavBtn list={ele} key={idx}/>
              })
            }
          </ul>
          <button className='nav-btn closeBtn' onClick={handleNavResponsive}><FaTimes /></button>
        </div>
        <button className='nav-btn ' onClick={handleNavResponsive}><FaBars /></button>
      </div>
    </div>
  )
}

export default Navbar
