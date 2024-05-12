import React, { useEffect, useRef } from 'react'
import contentProvider from '../../../utils/contentProvider.js'


import ProgressorBar from './ProgressorBar.jsx'

const About = () => {

  
  return (
    <div className='flex flex-col items-center'>
      <div className='my-6 flex flex-col justify-center items-center'>
        <h1 className='text-3xl my-4 font-semibold p-2 text-center'>Creator of The Website</h1>
        <img className=' my-4 border-2 border-black rounded-2xl w-[290px] sm:w-[300px]' src="./profile.png" alt="profileImg" />
      </div>
      <div className='my-6 p-2'>
        <h1 className='text-3xl text-center my-2 font-semibold'>Study Material Provider</h1>
        {
          contentProvider.map((ele,idx)=>{
            return <ProgressorBar info={ele} key={idx}/>
          })
        }
      </div>
    </div>
  )
}

export default About
