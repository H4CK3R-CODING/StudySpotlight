import React, { useState } from 'react'
import InputContainer from '../../components/InputContainer/InputContainer'
import Btn from '../Home/Btn'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import { useSetRecoilState } from 'recoil'
import Atom from '../../Recoil/Atom'

const SignIn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const setIsLoggedIn = useSetRecoilState(Atom.isLoggedIn)
    
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const noInput = [
        {
            label: "Username",
            id: "username",
            placeholder: "gaurav@gmail.com",
            inputType: "text",
            onchange: (event)=>{
                setUsername(event.target.value);
            }
        },
        {
            label: "Password",
            id: "password",
            placeholder: "*********",
            inputType: "password",
            Icon: "",
            onchange: (event)=>{
                setPassword(event.target.value);
            }
        },
    ];


    const btninfo = {
        label: "Sign In",
        onclick: async (event)=>{
            try {
                event.preventDefault();
                setIsLoading(true)
                if(username == "" || password == ""){
                    toast.error("Please Fill Up Username and Password")
                    return;
                }
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const {data} = await axios.post("/api/v1/user/signin",{
                    username,
                    password,
                },config);
                
                if(data.msg == "Successfully SignIn"){
                    toast.success("Successfully SignIn")
                    setIsLoggedIn(true)
                    // localStorage.setItem("isLoggedIn", {
                    //     value: true,
                    //     expiry: now.getTime() + 15  * 24 * 60 * 60
                    // });
                    navigate('/sem');
                }
                else if(data.msg == "Input are not correct"){
                    toast.error("Input are not correct")
                }
                else if(data.msg == "You have not access!"){
                    toast.error("You have not access!");
                }
                else if(data.msg == "Password is wrong!"){
                    toast.error("Password is wrong!");
                }
                else{
                    toast.error("Fill Up Again")
                }
            } catch (error) {
                toast.error("Try Again Some Issue Occur");
            }
            finally{
                setIsLoading(false)
            }
        }
    };

    
  return (
    <div className='flex justify-center items-center my-20'>
        <form className='w-full px-9 md:w-1/2'>
            {
                noInput.map((ele,idx)=>{
                    return <InputContainer key={idx} detail={ele}/>
                })
            }
            {
                isLoading ? <Loading/> : <Btn btninfo={btninfo}/>
            }
        </form>
    </div>
  )
}

export default SignIn
