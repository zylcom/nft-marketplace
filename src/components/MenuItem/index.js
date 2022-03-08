import React from "react";

function MenuItem({ img, text }) {
  return (
    <div className="flex gap-9 items-center lg:justify-center px-8 py-6 border-l-4 hover:bg-white/20 cursor-pointer">
      <img src={img} alt="" title={text} className="w-9" />
      <p className="text-base text-white lg:hidden">{text}</p>
    </div>
  );
}

export default MenuItem;
