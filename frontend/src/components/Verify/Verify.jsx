import React, { useState } from 'react'
import Loading from '../Loading'
import Btn from '../../pages/Home/Btn'
import InputContainer from '../InputContainer/InputContainer'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Verify = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [otp, setOtp] = useState(null);
    const location = useLocation();
    console.log(location)

    const detail={
        label: "Verify OTP",
        id: "otp",
        placeholder: "Enter OTP",
        inputType: "number",
        onchange: (event)=>{
            if(event.target.value.toString().length === 5){
                return;
            }
            setOtp(event.target.value);
            console.log(event.target.value.toString().length < 6)
        }
    }

    const btninfo = {
        label: "Verify & Register",
        onclick: async (event)=>{
            try {
                event.preventDefault();
                setIsLoading(true)
                // const {data} = await axios.post()
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const {data} = await axios.post("/api/v1/user/register",{
                    otp
                },config);
                console.log(data)

            } catch (error) {
                toast.error("Fill up all the detail");
            }
            finally{
                setIsLoading(false)
            }
        }
      };
    return (
        <div className='flex justify-center items-center'>
            <form className='w-full px-9 md:w-[75vw]'>
                <InputContainer detail={detail}/>
                {isLoading ? <Loading/> : <Btn btninfo={btninfo}/>}
            </form>
        </div>
    )
}

export default Verify
