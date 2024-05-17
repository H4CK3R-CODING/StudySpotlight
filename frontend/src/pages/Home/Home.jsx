import React, { useState } from 'react'
import Btn from './Btn'
import { useNavigate } from 'react-router-dom'
import Model from '../../components/Model';

const Home = () => {
  const [model, setModel] = useState(true);
  const navigate = useNavigate();
  const closeModel = ()=>{
    setModel(false);
  }



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
      {model && <Model closeFun={closeModel}/>}
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
