import React from 'react'

const InputContainer = ({detail}) => {
  return (
    <div className='flex flex-col my-2'>
      <label className='text-xl font-[450] cursor-pointer font-[Poppins] ml-1' htmlFor={`${detail.id}`}>{detail.label}</label>
      <input className='font-[Poppins] font-[400] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg p-2 m-1 focus:ring-blue-500 focus:border-blue-500 block' placeholder={`${detail.placeholder}`} type={`${detail.inputType}`} name={`${detail.id}`} id={`${detail.id}`} required autoComplete={`${detail.id}`} onChange={(event)=>{
        detail.onchange(event)
      }}/>
    </div>
  )
}

export default InputContainer
