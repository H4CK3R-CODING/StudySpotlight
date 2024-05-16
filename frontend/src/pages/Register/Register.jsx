import React, { useEffect, useState } from 'react'
import InputContainer from '../../components/InputContainer/InputContainer'
import {useNavigate} from "react-router-dom"
import data from '../../../utils/optionData'
import Option from '../Semester/Option'
import Btn from '../Home/Btn'
import axios from 'axios'
import { useRecoilState, useRecoilValue } from 'recoil'
import Atom from '../../Recoil/Atom'
import toast from "react-hot-toast"
import Loading from '../../components/Loading'

import validateEmail from '../../../utils/validateEmail.js'

const Register = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setSemester(1)
        setBranch("cse")

    },[])

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [gmail, setGmail] = useState("")
    const [semester, setSemester] = useRecoilState(Atom.semAtom)
    const [branch, setBranch] = useRecoilState(Atom.branchAtom)

    


    const noInput = [
        {
            label: "Name",
            id: "name",
            placeholder: "Enter Your Name",
            inputType: "text",
            onchange: (event)=>{
                setName(event.target.value);
            }
        },
        {
            label: "G-mail",
            id: "gmail",
            placeholder: "Enter G-mail",
            inputType: "email",
            onchange: (event)=>{
                setGmail(event.target.value);
            }
        },
        
    ];

    const btninfo = {
        label: "Register",
        onclick: async (event)=>{
            try {
                event.preventDefault();
                setIsLoading(true)
                if(name == "" || semester == "" || branch == "" || gmail == ""){
                    toast.error("Please Fill Up Username and Password")
                    return;
                }
                if(!validateEmail(gmail)){
                    toast.error("Write Valid Gmail")
                    return;
                }
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const {data} = await axios.post("/api/v1/user/register",{
                    name,
                    semester,
                    branch,
                    gmail,
                },config);
                if(data.msg == "OTP sent Successfully"){
                    toast.success("OTP sent to Your Gmail")
                    navigate("/register/verify",{state: {data: {name,semester,branch,gmail}}})
                }
                else if(data.msg == "User already exist"){
                    toast.success("User already exist")
                }
                else{                                          
                    toast.error("Some error fill query form");
                }
            } catch (error) {
                toast.error("Fill up all the detail");
            }
            finally{
                setIsLoading(false)
            }
        }
      };
    
  return (
    <div className=' flex justify-center items-center my-20'>
        <form className='w-full px-9 md:w-[75vw]'>
            {
                noInput.map((ele,idx)=>{
                    return <InputContainer key={idx} detail={ele}/>
                })
            }
            {data.map((ele, idx) => {
                return <Option key={idx} opt={ele} />;
            })}
            {
                isLoading ? <Loading/> : <Btn btninfo={btninfo}/>
            }
        </form>
    </div>
  )
}

export default Register
