import React, { useRef } from 'react'

const Btn = ({btninfo}) => {
  const btnref = useRef();
  return (
    <button ref={btnref} className='drop-shadow-2xl bg-black brightness-90 text-white border-2 border-black p-2 font-semibold m-1 rounded-lg -z-10' onClick={btninfo.onclick}>{btninfo.label}</button>
  )
}

export default Btn
