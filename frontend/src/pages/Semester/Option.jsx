import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Atom from "../../Recoil/Atom";

const Option = ({ opt }) => {
  const setSem = useSetRecoilState(Atom.semAtom);
  const setBranch = useSetRecoilState(Atom.branchAtom);

  return (
    <div>
      <label htmlFor={`${opt.sele}`}>{opt.label}</label>
      <select
        name={`${opt.sele}`}
        id={`${opt.sele}`}
        onChange={(event) => {
          console.log(event.target.value);
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
