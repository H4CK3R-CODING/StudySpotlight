import React from 'react'
import {Link} from 'react-router-dom'

const NavBtn = ({list}) => {
  return (
    <li onClick={list.onclick} className={`p-2 m-2 ${list.col} rounded-lg font-semibold text-white ${list.dis}`}><Link to={`${list.to}`}>{list.label}</Link></li>
  )
}

export default NavBtn
