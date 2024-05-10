import React from 'react'

const Btn = ({btninfo}) => {
  return (
    <button className='drop-shadow-2xl bg-black brightness-90 text-white border-2 border-black p-2 font-semibold m-1 rounded-lg' onClick={btninfo.onclick}>{btninfo.label}</button>
  )
}

export default Btn
