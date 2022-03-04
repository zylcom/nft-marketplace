import React from "react";

function Avatar({ img }) {
  return (
    <div className="flex h-10 w-10 items-center rounded-full">
      <img src={img} alt="" />
    </div>
  );
}

export default Avatar;
