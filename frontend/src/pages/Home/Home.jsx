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
        console.log("get notes");
      }
    },
    {
      label: "Join Community",
      onclick: ()=>{
        console.log("join community");
      }
    },
  ]
  return (
    <>
      <div className='home '>
        <div className='w-[500px] h-[500px] absolute left-28 top-1/4 rounded-xl flex flex-col justify-center items-center'>
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
