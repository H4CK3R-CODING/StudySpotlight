import React from 'react'
import Btn from './Btn'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const btninfo=[
    {
      label: "Get Notes",
      onclick: ()=>{
        navigate("/sem");
      }
    },
    {
      label: "Join Community",
      onclick: ()=>{
        navigate("/join")
      }
    },
  ]
  return (
    <>
      <div className='home '>
        <div className='z-10 absolute left-28 top-1/2 rounded-xl flex flex-col justify-center items-center sm:left-64'>
          {
            btninfo.map((ele,idx)=>{
              return <Btn btninfo={ele} key={idx}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home
