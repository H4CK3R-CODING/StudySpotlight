import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import Option from "./Option";
import Btn from "../Home/Btn";
import { useRecoilState } from "recoil";
import Atom from "../../Recoil/Atom";
import axios from "axios";

import data from "../../../utils/optionData";
import toast from "react-hot-toast";

const Semester = () => {
    const navigate = useNavigate();
    const [sem, setSem] = useRecoilState(Atom.semAtom);
    const [branch, setBranch] = useRecoilState(Atom.branchAtom);

    useEffect(()=>{
      setSem(1);
      setBranch("cse");
    },[])

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <div className='w-1/2'>
        <h1 className='text-4xl font-semibold text-center font-[Poppins] my-4' >Study Materials</h1>
        <form>
          {data.map((ele, idx) => {
            return <Option key={idx} opt={ele} />;
          })}
          <Btn
            btninfo={{
              onclick: async (event) => {
                event.preventDefault();
                console.log("Next -->");
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
                    console.log(data)
                    if(data.msg == "Unauthorized - No Token Provided" || data.msg == "You Can't Access that file!"){
                      toast.error("You Can't Access that file!")
                      navigate("/instuction");
                      return;
                    }
                    // navigate("/notes",{state: {data: data}});
                    // navigate(`sem-${sem}/branch-${branch}`)
                  
                } catch (error) {
                  console.log("ksdjf ==>" + error.message)
                  alert("Sign in first")
                }
              },
              label: "Next -->",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Semester;
