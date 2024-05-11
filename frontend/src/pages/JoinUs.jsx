import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

const JoinUs = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-semibold font-[Poppins] my-4'>Join Our Community Team!</h1>
      <div className='w-1/2 mt-2'>
        <h1 className='text-xl font-[Poppins] font-semibold'>Summary : </h1>
        <p className='font-[Poppins] font-[450]'>If you wish to contribute your notes to the site, please feel free to message me on WhatsApp. We welcome your valuable contributions.</p>
        <p className='font-[Poppins] font-[400] mt-6'>I hope this message finds you well. I am reaching out to discuss a potential collaboration opportunity that could benefit both our platforms and the wider community of learners and enthusiasts.</p>
        <p className='font-[Poppins] font-[400] mt-3'>At <span className='font-semibold'>StudySpotlight</span>, we are committed to providing comprehensive study materials, including notes, previous year question papers (PYQs), and additional resources, to aid individuals in their educational pursuits. We believe that collaboration with knowledgeable and dedicated contributors like yourself could greatly enhance the quality and diversity of content available on our platform.</p>
        <p className='font-[Poppins] font-[400] mt-3'>we will add your name and credentials to our website's "About" page as a study material provider. Additionally, we can establish a direct line of communication, possibly through WhatsApp, to facilitate the seamless exchange of materials and ideas.</p>
      </div>

      <div className='flex justify-center items-center gap-3 my-3 cursor-pointer border-2 border-black p-2 rounded-lg' onClick={()=>{
        window.open("https://chat.whatsapp.com/D9Psnqofh5oJE2boiUUoz4")
      }}>
        <h1 className='font-semibold font-[Poppins] '>WhatsApp Community</h1>
        <FaWhatsapp className='text-green-500 w-8 h-8'/>
      </div>
    </div>
  )
}

export default JoinUs
