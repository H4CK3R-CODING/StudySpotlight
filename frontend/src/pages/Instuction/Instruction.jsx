import React from 'react'

const Instruction = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-semibold font-[Poppins] my-4'>Instructions</h1>
      <div className='w-1/2 mt-2'>
        <h1 className='text-xl font-[Poppins] font-semibold'>Step 1 : Registration Process</h1>
        <ul className='list-disc p-4'>
          <li className='font-[Poppins]'>To access our website's features, kindly proceed by registering on our platform. Your registration will grant you access to our exclusive content.</li>
          <li className='font-[Poppins]'>Once you have completed the registration, please allow some time for our team to process your request. You will receive a notification via email at your registered Gmail address once your access has been granted.</li>
        </ul>
      </div>
      <div className='w-1/2'>
        <h1 className='text-xl font-[Poppins] font-semibold'>Step 2 : Sign In and Access Study Material</h1>
        <ul className='list-disc p-4'>
          <li className='font-[Poppins]'>Upon receiving the confirmation email, please proceed to sign in using your registered credentials.</li>
          <li className='font-[Poppins]'>Once signed in, you will gain full access to all the notes and resources available on our website.</li>
        </ul>
      </div>
      <p className='font-[Poppins] w-1/2 font-[450]'>We appreciate your cooperation and patience throughout this process. Should you encounter any difficulties or have inquiries, please do not hesitate to contact us. Thank you for choosing our platform!</p>
    </div>
  )
}

export default Instruction
