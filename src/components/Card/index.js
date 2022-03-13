import React from "react";
import { HeartIcon } from "src/assets";
import { Icon, Avatar } from "src/components";

function Card() {
  return (
    <div className="group min-w-[291px] rounded-lg bg-gun-metal p-3 hover:shadow-md hover:shadow-white/20 md:min-w-0">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 flex w-full justify-between p-3">
          <div className="dounded-xl py-1 px-3">
            <p className="text-base font-medium leading-8 text-white">Art</p>
          </div>
          <Icon img={HeartIcon} iconName="Love" />
        </div>
        <img
          src="https://picsum.photos/id/1/640/480"
          alt=""
          className="rounded-lg"
        />
        <div className="absolute bottom-0 w-full bg-gun-metal/80 text-center group-hover:hidden">
          <p className="leading-[29px] text-white">
            Ends in : 69d : 6h : 9m : 0s
          </p>
        </div>
      </div>
      <div className="mt-3 py-1">
        <p className="text-sm text-white">
          Current Bid:{" "}
          <span className="float-right block text-sm text-very-light-blue">
            69.666 ETH
          </span>
        </p>
        <p className="border-b border-b-white/10 py-4 text-lg font-medium text-white">
          Zylcom
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
