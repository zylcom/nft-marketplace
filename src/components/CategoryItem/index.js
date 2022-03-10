import React from "react";
import "./category-item.css";

function CategoryItem() {
  return (
    <div className="rounded-full">
      <button className="active h-[45px] whitespace-nowrap rounded-[20px] bg-white/5 py-3 px-6 text-sm text-white focus:outline-none">
        Action
      </button>
    </div>
  );
}

export default CategoryItem;
