import React from "react";
import { useLocation } from "react-router-dom";

const Note = () => {
  const location = useLocation();
  const info = location.state.data;
  console.log(info);

  return (
    <div className="min-h-[70vh]">
      <h1 className='text-4xl font-semibold font-[Poppins] my-8 text-center p-2'>Choose Your Subject</h1>
      <div className="flex items-center flex-col sm:flex-row">
        {info.map((ele, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-center items-center bg-gradient-to-br from-[#281ac3] to-[#4156f5] shadow-lg shadow-[#5e50b1] rounded-xl h-40 m-4 cursor-pointer text-white font-semibold text-xl w-72 h-55  sm:w-60 h-40"
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
