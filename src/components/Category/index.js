import React from "react";
import { CategoryItem } from "src/components";

function Category() {
  return (
    <div className="absolute mt-[13px] h-[90vw] min-w-[48px] max-w-[65px] origin-top-left translate-y-12 -rotate-90 select-none overflow-y-auto md:h-[55vw] lg:h-[49vw] xl:h-[58vw]">
      <div className="flex w-auto flex-grow origin-top-left translate-x-12 rotate-90 gap-4 rounded-full">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
}

export default Category;
