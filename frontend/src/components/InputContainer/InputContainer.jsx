import React, { useState } from 'react'
import { LiaEye } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";

const InputContainer = ({detail}) => {

  const [passvisible, setPassvisible] = useState(false);
  
  return (
    <div className='flex flex-col my-2'>
      <label className='text-xl font-[450] cursor-pointer font-[Poppins] ml-1' htmlFor={`${detail.id}`}>{detail.label}</label>
      <div className='relative w-full'>
        <input className='w-full font-[Poppins] font-[400] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg p-2 m-1 focus:ring-blue-500 focus:border-blue-500 block' placeholder={`${detail.placeholder}`} type={`${detail.inputType}`} name={`${detail.id}`} id={`${detail.id}`} onFocus={()=>{
          detail.inputType = "password"
          setPassvisible(false)
        }} required autoComplete={`${detail.id}`} onChange={(event)=>{
          detail.onchange(event) 
        }}/>
        {
          detail.id == "password" ? <span onClick={()=>{
            if(passvisible){
              detail.inputType = "password"
              setPassvisible(false)
            }
            else{
              detail.inputType = "text"
              setPassvisible(true)
            }
          }} className='absolute top-2 right-3 p-2'>{passvisible ? <LiaEye className='text-2xl' /> : <LiaEyeSlash className='text-2xl' />}</span> : ""
        }
      </div>
      
    </div>
  )
}

export default InputContainer
