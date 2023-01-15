import React, { useEffect, useState } from "react";
import { HeartIcon } from "src/assets";
import { Icon, Avatar } from "src/components";
import { useCountdown } from "src/hooks/useCountdown";
import { getCategoryById } from "src/services/apiServices";

function Card({ title, postImage, bid, categoryId }) {
  const [category, setCategory] = useState({});
  const [days, hours, minutes, seconds] = useCountdown(
    new Date("1/1/2025").getTime()
  );

  useEffect(() => {
    async function fetchCategory() {
      try {
        const result = await getCategoryById(categoryId);

        setCategory(result.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchCategory();

    return () => {
      setCategory({});
    };
  }, [categoryId]);

  return (
    <div className="min-w-[291px] rounded-lg bg-gun-metal p-3 md:min-w-0">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 flex w-full justify-between bg-gradient-to-b from-gun-metal/60 p-3">
          <div className="dounded-xl py-1 px-3">
            <p className="text-base font-medium leading-8 text-white">
              {category && category.name}
            </p>
          </div>

          <Icon img={HeartIcon} iconName="Love" />
        </div>

        <img src={postImage} alt="" className="rounded-lg" />

        <div className="absolute bottom-0 w-full bg-gun-metal/80 text-center">
          <p className="leading-[29px] text-white">
            Ends in : {days}d : {hours}h : {minutes}m : {seconds}s
          </p>
        </div>
      </div>
      <div className="mt-3 py-1">
        <p className="text-sm text-white">
          Current Bid:{" "}
          <span className="float-right block text-sm text-very-light-blue">
            {bid} ETH
          </span>
        </p>

        <p className="border-b border-b-white/10 py-4 text-lg font-medium text-white">
          {title}
        </p>
      </div>
      <div className="mt-4 flex -space-x-3 overflow-hidden">
        <Avatar img="https://picsum.photos/720" />
        <Avatar img="https://picsum.photos/720" />
        <Avatar img="https://picsum.photos/720" />
        <Avatar img="https://picsum.photos/720" />
        <Avatar img="https://picsum.photos/720" />
        <div className="h-10 w-10 rounded-full bg-very-light-blue">
          <p className="text-center text-xs leading-10 text-white">100+</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
