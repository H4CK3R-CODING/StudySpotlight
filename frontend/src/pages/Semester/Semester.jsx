import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Option from "./Option";
import Btn from "../Home/Btn";
import { useRecoilState } from "recoil";
import Atom from "../../Recoil/Atom";
import axios from "axios";

import data from "../../../utils/optionData";

const Semester = () => {
    const navigate = useNavigate();
    const [sem, setSem] = useRecoilState(Atom.semAtom);
    const [branch, setBranch] = useRecoilState(Atom.branchAtom);

  return (
    <div>
      <div>
        <h1>Fill Your Details</h1>
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
                    const data = await axios.post("/api/v1/notes/getSub", {
                      sem: sem,
                      branch: branch,
                    },config);
                    console.log(data.data)
                    navigate("/notes",{state: {data: data.data}});
                    // navigate(`sem-${sem}/branch-${branch}`)
                  
                } catch (error) {
                  console.log("ksdjf ==>" + error.message)
                  alert("Sign in first")
                }
              },
              label: "Next -->",
            }}
          />
          <p>sem:{sem}</p>
          <p>branch:{branch}</p>
        </form>
      </div>
    </div>
  );
};

export default Semester;
