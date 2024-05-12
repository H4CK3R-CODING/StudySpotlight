import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#181b1b] flex justify-evenly flex-col items-center md:flex-row items-'>
      <div className='m-2 p-2 flex flex-col items-center'>
        <h1 className='text-white p-2 font-semibold text-4xl italic my-2'>Creator</h1>
        <img className='w-[200px] p-2 rounded-3xl' src="./logo.png" alt="creator_img" />
        <h1 className='text-white p-2 font-[Poppins] font-[400] text-2xl'>Gaurav</h1>
      </div>
      <div className='m-2 p-2 flex flex-col'>
        <h1 className='text-white p-2 my-2 font-semibold text-4xl italic'>Get in Touch</h1>
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
            <div className='flex items-center cursor-pointer' onClick={()=>{
                window.open("https://wa.me/+919306341448")
            }}>
                <FaWhatsapp className='text-green-500 w-8 h-8'/>
                <span className='text-white p-2 font-[Poppins] font-[400] text-lg'>WhatsApp</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer