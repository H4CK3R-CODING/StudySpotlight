import React, { useState } from 'react'
import InputContainer from '../../components/InputContainer/InputContainer'

import data from '../../../utils/optionData'
import Option from '../Semester/Option'
import Btn from '../Home/Btn'
import axios from 'axios'
import { useRecoilValue } from 'recoil'
import Atom from '../../Recoil/Atom'

const Register = () => {
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
            event.preventDefault();
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
            console.log(data)
          console.log("get notes");
          console.log(name);
          console.log(gmail);
          console.log(password);
          console.log(semester);
          console.log(branch);
        }
      };
    
  return (
    <div className='flex justify-center items-center'>
        <form>
            {
                noInput.map((ele,idx)=>{
                    return <InputContainer key={idx} detail={ele}/>
                })
            }
            {data.map((ele, idx) => {
                return <Option key={idx} opt={ele} />;
            })}
            <Btn btninfo={btninfo}/>
        </form>
    </div>
  )
}

export default Register
