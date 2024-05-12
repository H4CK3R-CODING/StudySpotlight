import React from "react";
import { useRecoilState } from "recoil";
import Atom from "../../Recoil/Atom";

const Option = ({ opt }) => {
  const [sem, setSem] = useRecoilState(Atom.semAtom);
  const [branch, setBranch] = useRecoilState(Atom.branchAtom);

  return (
    <div className="flex flex-col my-2">
      <label className='text-xl font-[450] cursor-pointer font-[Poppins]' htmlFor={`${opt.sele}`}>{opt.label}</label>
      <select
        name={`${opt.sele}`}
        id={`${opt.sele}`}
        className='font-[Poppins] font-[400] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg p-2 m-1 focus:ring-blue-500 focus:border-blue-500 block'
        required
        onChange={(event) => {
          // console.log(event.target.value);
          {opt.sele == "sem" ? setSem(event.target.value) : setBranch(event.target.value)};
        }}
      >
        {opt.opt.map((ele, idx) => {
          return (
            <option key={idx} value={`${ele.val}`}>
              {ele.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Option;
