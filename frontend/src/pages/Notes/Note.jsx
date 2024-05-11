import React from "react";
import { useLocation } from "react-router-dom";

const Note = () => {
  const location = useLocation();
  const info = location.state.data;
  console.log(info);

  return (
    <div>
      {info.map((ele, idx) => {
        return (
          <div
            key={idx}
            className="bg-red-500 w-40 h-40 m-4 cursor-pointer"
            onClick={() => {
              window.open(ele.link);
            }}
          >
            {ele.subject}
          </div>
        );
      })}
    </div>
  );
};

export default Note;
