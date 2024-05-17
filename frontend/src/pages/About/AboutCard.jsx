import React from 'react'

const AboutCard = ({info}) => {
  return (
    <div className='p-6 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold p-2 text-center font-[Overpass] italic'>{info.postition}</h1>
        <img className='aspect-square bg-center bg-cover my-4 border-2 border-black rounded-2xl w-[290px] sm:w-[300px]' src={`${info.Img}`}alt="profileImg" />
        <h1 className='font-[Overpass] italic text-3xl font-semibold text-center'>{info.name}</h1>
        <h1 className='font-[Overpass] italic text-3xl font-semibold text-center'>{info.branch}</h1>
        <h1 className='font-[Overpass] italic text-3xl font-semibold text-center'>{info.batch}</h1>
    </div>
  )
}

export default AboutCard
