import React, { useEffect, useRef } from "react";
import Atom from "../../Recoil/Atom.js"
import { useRecoilState } from 'recoil'

const ProgressorBar = ({info}) => {
    const [totalMaterial,setTotalMaterial] = useRecoilState(Atom.totalMaterial)
    const processRef = useRef();

    useEffect(()=>{
        Array.from(processRef.current.children).map((ele,idx)=>{
            ele.style.width = `${((info.quantity*100)/totalMaterial)}%`
        })
        // processRef.current.style.width = [`${((info.quantity*100)/totalMaterial)}%`]
        console.log(processRef.current.children[0].style.width)
        console.log(totalMaterial)
    },[])

  return (
    <div>
      <div className="my-2">
        <div className="flex justify-between py-2">
          <span className="text-lg font-semibold">{info.name}</span>
          <span className="text-lg font-semibold">{((info.quantity*100)/totalMaterial).toFixed(2)}%</span>
        </div>
        <div
          ref={processRef}
          className="relative w-[450px] rounded-lg bg-red-500 h-2 overflow-hidden"
        >
          <span className="bg-blue-600 absolute top-0 left-0 h-full w-0 rounded-lg transition-all duration-1000"></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressorBar;
