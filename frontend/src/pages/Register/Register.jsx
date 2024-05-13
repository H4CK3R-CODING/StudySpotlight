import React, { useState } from 'react'
import InputContainer from '../../components/InputContainer/InputContainer'

import data from '../../../utils/optionData'
import Option from '../Semester/Option'
import Btn from '../Home/Btn'
import axios from 'axios'
import { useRecoilValue } from 'recoil'
import Atom from '../../Recoil/Atom'
import toast from "react-hot-toast"
import Loading from '../../components/Loading'

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const semester = useRecoilValue(Atom.semAtom)
    const branch = useRecoilValue(Atom.branchAtom)


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
        {
            label: "Password",
            id: "password",
            placeholder: "Enter Password",
            inputType: "password",
            onchange: (event)=>{
                setPassword(event.target.value);
            }
        },
    ];

    const btninfo = {
        label: "Register",
        onclick: async (event)=>{
            try {
                event.preventDefault();
                setIsLoading(true)
                if(name == "" || semester == "" || branch == "" || gmail == "" || password == "" ){
                    toast.error("Please Fill Up Username and Password")
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
                    password,
                },config);

                if(data.msg == "Submited Succefully"){

                    const {data} = await axios.post("/api/v1/user/validUser",{
                        username: gmail,
                        password: password
                    },config)

                    console.log(data);


                    toast.success("Submited Successfully")
                }
                else if(data.msg == "User already exist!"){
                    toast.error("User already exist!")
                }
                else if(data.msg == "Some mistake in your Inputs"){
                    toast.error("Some mistake in your Inputs")
                }
                else{
                    toast.error("Fill Again")
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
