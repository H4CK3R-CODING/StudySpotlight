import React, { useRef } from 'react'
import { MdClose } from "react-icons/md";

const Model = ({closeFun}) => {

    const modelRef = useRef();
    const closeModel = (e)=>{
        if(modelRef.current === e.target){
            closeFun();
        }
    }


  return (
    <div onClick={closeModel} ref={modelRef} className='fixed inset-0 z-50 flex flex-col justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm px-4'>
       <div className='flex flex-col justify-center items-center'>
        <div onClick={()=>{
            closeFun();
        }} className='place-self-end cursor-pointer p-1'><MdClose className='text-4xl font-bold text-white place-self-end' /></div>
        <div className='flex flex-col justify-center items-center bg-indigo-500 max-w-md p-6 rounded-xl'>
            <h1 className='text-white text-3xl font-semibold font-[Overpass] italic'>Noted</h1>
            <p className='text-white font-[Overpass] italic text-xl text-center'>If you find any missing or incorrect notes, please contact us using our contact form. We'll address your concerns promptly to ensure accuracy and completeness.</p>
        </div>
       </div>
    </div>
  )
}

export default Model
