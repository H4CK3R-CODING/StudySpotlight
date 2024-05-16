import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <div className='bg-[#181b1b] flex justify-evenly flex-col items-center md:flex-row'>
          <div className='m-2 p-2 flex flex-col items-center'>
            <h1 className='text-white p-2 font-semibold text-4xl  my-2'>Creator</h1>
            <img className='w-[200px] p-2 rounded-3xl' src="./profile.png" alt="creator_img" />
            <h1 className='text-white p-2 font-[Poppins] font-[400] text-2xl'>Gaurav</h1>
          </div>
          <div className='m-2 p-2 flex flex-col'>
            <h1 className='text-white p-2 my-2 font-semibold text-4xl'>Get in Touch</h1>
            <div>
                <div className='flex items-center cursor-pointer' onClick={()=>{
                    window.open("https://www.instagram.com/mrgaurav_rathour/")
                }}>
                    <img className='w-8 h-8' src="./instagram.png" alt="instImg" />
                    <span className='text-white p-2 font-[Poppins] font-[400] text-lg'>Instagram</span>
                </div>
                <div className='flex items-center text-[#cab5ed] cursor-pointer' onClick={()=>{
                    window.open("https://github.com/H4CK3R-CODING")
                }}>
                    <FaGithub className='w-8 h-8'/>
                    <span className='text-white p-2 font-[Poppins] font-[400] text-lg'>GitHub</span>
                </div>
                <div className='flex items-center cursor-pointer' onClick={()=>{
                    window.open("mailto: gaurav1vincenzo@gmail.com")
                }}>
                    <img className='w-8 h-8' src="./mail.png" alt="mailImg" />
                    <span className='text-white p-2 font-[Poppins] font-[400] text-lg'>Gmail</span>
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
        <div className='w-full h-20 flex justify-center items-center p-2 bg-black'>
          <p className='font-semibold font-[Poppins] text-white text-center'>Copyright © 2024 StudySpotlight®. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
