import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='bg-[#181b1b] flex justify-evenly'>
      <div className='m-2 p-2 flex flex-col items-center'>
        <h1 className='text-white py-2 font-[Poppins] font-semibold text-2xl'>Creator</h1>
        <img className='w-[200px] p-2 rounded-lg' src="./logo.png" alt="asdf" />
        <h1 className='text-white p-2 font-[Poppins] font-semibold text-xl'>Gaurav</h1>
      </div>
      <div className='m-2 p-2 flex flex-col'>
        <h1 className='text-white p-2 font-[Poppins] font-semibold text-2xl'>Get in Touch</h1>
        <div>
            <div className='flex items-center cursor-pointer' onClick={()=>{
                window.open("https://www.instagram.com/mrgaurav_rathour/")
            }}>
                <FiInstagram className='text-[#ff3300] w-8 h-8'/>
                <span className='text-white p-2 font-[Poppins] font-[400] text-lg'>Instagram</span>
            </div>
            <div className='flex items-center cursor-pointer' onClick={()=>{
                window.open("https://github.com/H4CK3R-CODING")
            }}>
                <FaGithub className='w-8 h-8'/>
                <span className='text-white p-2 font-[Poppins] font-[400] text-lg'>GitHub</span>
            </div>
            <div className='flex items-center cursor-pointer' onClick={()=>{
                window.open("mailto: gaurav1vincenzo@gmail.com")
            }}>
                <BiLogoGmail  className='text-[#d44638] w-8 h-8'/>
                <span className='text-white p-2 font-[Poppins] font-[400] text-lg'>GMail</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
