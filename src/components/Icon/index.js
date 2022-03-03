import React from "react";

function Icon({ img, iconName }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(196,196,196,0.2)]">
      <img src={img} alt="" title={iconName} className="w-6" />
    </div>
  );
}

export default Icon;
