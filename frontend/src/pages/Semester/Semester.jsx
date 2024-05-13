import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import Option from "./Option";
import Btn from "../Home/Btn";
import { useRecoilState } from "recoil";
import Atom from "../../Recoil/Atom";
import axios from "axios";

import data from "../../../utils/optionData";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";

const Semester = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [sem, setSem] = useRecoilState(Atom.semAtom);
    const [branch, setBranch] = useRecoilState(Atom.branchAtom);

    useEffect(()=>{
      setSem(1);
      setBranch("cse");
    },[])

  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <div className='w-[90vw] lg:w-1/2'>
        <h1 className='text-4xl font-semibold text-center font-[Poppins] mb-8' >Study Materials</h1>
        <form>
          {data.map((ele, idx) => {
            return <Option key={idx} opt={ele} />;
          })}
          {
            isLoading ? <Loading/> : <Btn
            btninfo={{
              onclick: async (event) => {
                event.preventDefault();
                setIsLoading(true);
                // console.log("Next -->");
                try {
                    const config = {
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    }
                    const {data} = await axios.post("/api/v1/notes/getSub", {
                      sem: sem,
                      branch: branch,
                    },config);
                    // console.log(data)
                    if(data.msg == "Unauthorized - No Token Provided" || data.msg == "You Can't Access that file!"){
                      toast.error("You Can't Access that file!")
                      navigate("/instuction");
                      return;
                    }
                    if(data.msg == "data not found"){
                      toast.error("Data updated very soon!")
                      toast.error("Data not found for that")
                      return;
                    }
                    navigate("/notes",{state: {data: data}});
                    
                  } catch (error) {
                    if(error.message == "invalid signature" || error.message == "invalid token"){
                      // console.log("error")
                      toast.error("Your attempt to access it is incorrect.")
                      return;
                    }
                    toast.error("Some Error Occure--Try Again Later")
                }
                setIsLoading(false)
              },
              label: "Next -->",
            }}
          />
          }
        </form>
      </div>
    </div>
  );
};

export default Semester;
