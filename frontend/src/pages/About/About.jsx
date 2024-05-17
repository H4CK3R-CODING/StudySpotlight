import React, { useEffect, useRef } from 'react'
import contentProvider from '../../../utils/contentProvider.js'
import ProgressorBar from './ProgressorBar.jsx'
import AboutCard from './AboutCard.jsx'

const About = () => {

  const info=[
    {
      postition: "Website Innovator",
      name: "Gaurav Rathour",
      branch: "B.Tech CSE",
      batch: "2022-26",
      Img: './profile.png'
    },
    {
      postition: "UI/UX Designer",
      name: "Vansh Gill",
      branch: "B.Tech CSE",
      batch: "2022-26",
      Img: './vansh.png'
    },
    {
      postition: "Ideation Manager",
      name: "Gulshan Nagwan",
      branch: "B.Tech CSE",
      batch: "2022-26",
      Img: './gulshan.png'
    },
  ]

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-5xl font-[Overpass] italic py-3 font-semibold p-2 mt-5 text-center'>GVG Craft</h1>
      <div className=' flex justify-evenly items-center w-full flex-row flex-wrap'>
        {
          info.map((ele,idx)=>{
            return <AboutCard info={ele} key={idx}/>
          })
        }
      </div>
      {/* <hr className='border-gray-400 w-[90vw] rounded-xl'/> */}
      <div className='my-2 p-2'>
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
