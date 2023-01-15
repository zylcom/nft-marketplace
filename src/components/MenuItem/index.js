import React from "react";

function MenuItem({ img, text, active }) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-9 px-8 py-6 hover:bg-white/20 lg:justify-center ${
        active ? " border-l-4" : ""
      }`}
    >
      <img src={img} alt="" title={text} className="w-9" />
      <p className="text-base text-white lg:hidden">{text}</p>
    </div>
  );
}

export default MenuItem;
