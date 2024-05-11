import React from "react";
import { useLocation } from "react-router-dom";

const Note = () => {
  const location = useLocation();
  const info = location.state.data;
  console.log(info);

  return (
    <div>
      <h1 className='text-4xl font-semibold font-[Poppins] my-4 text-center' >Choose Your Subject</h1>
      <div className="flex">
        {info.map((ele, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-center items-center bg-gradient-to-br from-[#281ac3] to-[#4156f5] shadow-lg shadow-[#5e50b1] rounded-xl w-40 h-40 m-4 cursor-pointer text-white font-semibold text-xl"
              onClick={() => {
                window.open(ele.link);
              }}
            >
              {ele.subject}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Note;
