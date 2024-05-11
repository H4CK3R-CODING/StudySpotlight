import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Option from "./Option";
import Btn from "../Home/Btn";
import { useRecoilState } from "recoil";
import Atom from "../../Recoil/Atom";
import axios from "axios";

const Semester = () => {
    const navigate = useNavigate();
    const [sem, setSem] = useRecoilState(Atom.semAtom);
    const [branch, setBranch] = useRecoilState(Atom.branchAtom);

  const data = [
    {
      label: "In which Year you are ?",
      sele: "sem",
      opt: [
        {
          val: 1,
          name: "1st Semester",
        },
        {
          val: 2,
          name: "2nd Semester",
        },
        {
          val: 3,
          name: "3rd Semester",
        },
        {
          val: 4,
          name: "4th Semester",
        },
        {
          val: 5,
          name: "5th Semester",
        },
        {
          val: 6,
          name: "6th Semester",
        },
        {
          val: 7,
          name: "7th Semester",
        },
        {
          val: 8,
          name: "8th Semester",
        },
      ],
    },
    {
      label: "Choose Branch",
      sele: "branch",
      opt: [
        {
          val: "cse",
          name: "CSE",
        },
        {
          val: "ece",
          name: "ECE",
        },
        {
          val: "mech",
          name: "MECH",
        },
        {
          val: "bio",
          name: "BIO",
        },
      ],
    },
  ];
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
