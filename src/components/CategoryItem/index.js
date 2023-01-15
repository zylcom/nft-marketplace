import React from "react";
import "./category-item.css";

function CategoryItem({ id, name, active, clickHandler }) {
  return (
    <div className="rounded-full">
      <button
        className={`h-[45px] whitespace-nowrap rounded-[20px] bg-white/5 py-3 px-6 text-sm text-white focus:outline-none ${
          active ? "active" : ""
        }`}
        onClick={() => {
          clickHandler(id);
        }}
      >
        {name}
      </button>
    </div>
  );
}

export default CategoryItem;
