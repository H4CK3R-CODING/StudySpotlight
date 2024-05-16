import React, { useEffect, useState } from 'react'
import data from '../../../utils/optionData'
import InputContainer from '../../components/InputContainer/InputContainer';
import Option from '../Semester/Option';
import Loading from '../../components/Loading';
import Btn from '../Home/Btn';
import { useRecoilState } from 'recoil';
import Atom from '../../Recoil/Atom';
import validateEmail from '../../../utils/validateEmail';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
    useEffect(()=>{
        setSemester(1)
        setBranch("cse")
    },[])

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("");
    const [gmail, setGmail] = useState("")
    const [query, setQuery] = useState("")
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
        label: "Any Query",
        onclick: async (event)=>{
            try {
                event.preventDefault();
                setIsLoading(true)
                if(name == "" || semester == "" || branch == "" || gmail == "" || query == ""){
                    toast.error("Please Fill Up All the Input")
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
                const semesterInt = parseInt(semester);

                const {data} = await axios.post("/api/v1/user/contact",{
                    name,
                    gmail,
                    semester: semesterInt,
                    branch,
                    query
                },config)

                if(data.msg == "Sent"){
                    toast.success("Your Query Submitted")
                    navigate("/");
                }
                else if(data.msg == "Input are wrong"){
                    toast.error("Your Input are not correct")
                }
                else{
                    toast.error("Try Again Later")
                }

                
                // console.log(name)
                // if(name == "" || semester == "" || branch == "" || gmail == ""){
                //     toast.error("Please Fill Up Username and Password")
                //     return;
                // }
                // const config = {
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // }
                // const {data} = await axios.post("",{
                //     name,
                //     semester,
                //     branch,
                //     gmail,
                // },config);

                // if(data.msg == "Submited Succefully"){

                //     const {data} = await axios.post("",{
                //         name: name,
                //         gmail: gmail,
                //     },config)

                    
                //     toast.success("Submited Successfully")
                // }
                // else{
                //     toast.error("Fill Again")
                // }
            } catch (error) {
                toast.error("Some Error Occur");
            }
            finally{
                setIsLoading(false)
            }
        }
      };
  return (
    <div className=' flex flex-col justify-center items-center my-14'>
        <h1 className='text-4xl p-2 m-2 font-semibold text-center'>Contact & Query Form</h1>
        <form className='w-full px-9 md:w-[75vw]'>
            {
                noInput.map((ele,idx)=>{
                    return <InputContainer key={idx} detail={ele}/>
                })
            }
            {data.map((ele, idx) => {
                return <Option key={idx} opt={ele} />;
            })}
            <h1 className='text-xl font-[450] cursor-pointer font-[Poppins] ml-1'>Write Your Query here</h1>
            <textarea onChange={(event)=>{
                setQuery(event.target.value)
            }} className='font-[Poppins] font-[400] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg p-2 m-1 focus:ring-blue-500 focus:border-blue-500 block w-full h-40' placeholder='Write Any Query you have.' name="query" id="query" required></textarea>
            {
                isLoading ? <Loading/> : <Btn btninfo={btninfo}/>
            }
        </form>
    </div>
  )
}

export default Contact
