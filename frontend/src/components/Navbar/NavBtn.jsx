import React from 'react'
import {Link} from 'react-router-dom'

const NavBtn = ({list}) => {
  return (
    <li className='p-2 m-2 bg-blue-500 rounded-lg font-semibold text-white'><Link to={`${list.to}`}>{list.label}</Link></li>
  )
}

export default NavBtn
