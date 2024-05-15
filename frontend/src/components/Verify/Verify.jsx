import React, { useState } from "react";
import Loading from "../Loading";
import Btn from "../../pages/Home/Btn";
import InputContainer from "../InputContainer/InputContainer";
import axios from "axios";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Verify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState(null);
  const [password, setPassword] = useState("")
  const location = useLocation();
  const { name, semester, branch, gmail } = location.state.data;
  // console.log(location.state.data)
  // console.log(name)

  const detail = [
    {
      label: "Verify OTP",
      id: "otp",
      placeholder: "Enter OTP",
      inputType: "text",
      onchange: (event) => {
        setOtp(event.target.value);
      },
    },
    {
        label: "Password",
        id: "password",
        placeholder: "Enter Password",
        inputType: "password",
        onchange: (event)=>{
            console.log(password)
            setPassword(event.target.value);
        }
    },
  ];

  const btninfo = {
    label: "Verify & Register",
    onclick: async (event) => {
      try {
        event.preventDefault();
        setIsLoading(true);
        if(!password || !otp){
            toast.error("Empty input don't accepted")
            return;
        }
        const parseOtp = otp.toString()
        console.log(parseOtp)
        // console.log(_.isString(parseOtp))
        // const {data} = await axios.post()
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/v1/user/verify",
          {
            name,
            semester,
            branch,
            gmail,
            password,
            otp: parseOtp,
          },
          config
        );
        console.log(data)
        if(data.msg == "Otp verified Successfully"){
            const {isVerify} = await axios.post("/api/v1/user/validUser",{
                name: name,
                username: gmail,
                password: password
            },config)
            if(isVerify.data == "Access granted"){
                toast.success("Access granted to you")
            }
            else if(isVerify.data == "User already exist"){
                toast.success("User already granted to access")
            }
            else{
                toast.error("contact to StudySpotlight Team")
            }
            toast.success("Registered Successfully")
        }
        else if(data.msg == "Otp does not match check your inbox"){
            toast.error("OTP is wrong")
        }
        else if(data.msg == "User does not exist or has been veried already"){
            toast.error("User does not exist or has been veried already")
        }
        else if(data.msg == "Otp is expired resend again"){
            toast.error("Otp is expired send again")
        }
        else if(data.msg == "error occur in the verify otp"){
            toast.error("error")
        }
        else{
            toast.error("some")
        }
      } catch (error) {
        toast.error("Try Again");
        console.log(error.message)
      } finally {
        setIsLoading(false);
      }
    },
  };
  return (
    <div className="flex justify-center items-center">
      <form className="w-full px-9 md:w-[75vw]">
        {detail.map((ele,idx)=>{
            return <InputContainer detail={ele} key={idx}/>
        })}
        {isLoading ? <Loading /> : <Btn btninfo={btninfo} />}
      </form>
    </div>
  );
};

export default Verify;
