import React, { useEffect, useState } from "react";
import { CategoryItem } from "src/components";
import { getAllCategory } from "src/services/apiServices";

function Category({ categoryId, changeCategoryIdHandler }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const result = await getAllCategory();

      setCategories(result.data);
      changeCategoryIdHandler(result.data[0].id);
    }

    fetchCategories();
  }, []);

  return (
    <div className="absolute mt-[13px] h-[90vw] min-w-[48px] max-w-[65px] origin-top-left translate-y-12 -rotate-90 select-none overflow-y-auto md:h-[55vw] lg:h-[49vw] xl:h-[58vw]">
      <div className="flex w-auto flex-grow origin-top-left translate-x-12 rotate-90 gap-4 rounded-full">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            {...category}
            active={categoryId === category.id}
            clickHandler={changeCategoryIdHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
