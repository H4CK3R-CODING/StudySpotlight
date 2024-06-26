import React from 'react'
import { Link } from 'react-router-dom'

const Instruction = () => {
  return (
    <div className='flex flex-col justify-center items-center my-8'>
      <div className='w-[90vw]'>
        <h1 className='text-5xl font-semibold font-[Poppins] my-8'>Instructions</h1>
        <div className=' mt-2'>
          <h1 className='text-xl font-[Poppins] font-semibold'>Step 1 : Registration Process</h1>
          <ul className='list-disc p-4'>
            <li className='font-[Poppins]'>To access our website's features, kindly proceed by registering on our platform. Your registration will grant you access to our exclusive content.</li>
            <li className='font-[Poppins]'>Once you have completed the registration, please allow some time for our team to process your request. You will receive a notification via email at your registered Gmail address once your access has been granted. <Link className='text-blue-600 underline' to={"/register"}>Click here for Register</Link> </li>
          </ul>
        </div>
        <div className=''>
          <h1 className='text-xl font-[Poppins] font-semibold'>Step 2 : Sign In and Access Study Material</h1>
          <ul className='list-disc p-4'>
            <li className='font-[Poppins]'>Upon receiving the confirmation email, please proceed to sign in using your registered credentials.</li>
            <li className='font-[Poppins]'>Once signed in, you will gain full access to all the notes and resources available on our website.</li>
          </ul>
        </div>
        <p className='font-[Poppins]  mt-5 mb-8 font-[450]'>We appreciate your cooperation and patience throughout this process. Should you encounter any difficulties or have inquiries, please do not hesitate to contact us. Thank you for choosing our platform!</p>

      </div>
    </div>
  )
}

export default Instruction
