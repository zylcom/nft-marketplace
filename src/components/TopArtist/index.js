import React from "react";
import { User } from "src/components";

function TopArtist() {
  return (
    <div className="flex max-h-80 flex-col gap-y-5 overflow-y-auto">
      <div className="flex items-center">
        <span className="mr-2 text-xl font-semibold text-white">1.</span>{" "}
        <div className="flex w-full items-center justify-between">
          <User />
          <button className="my-[6.5px] rounded-lg bg-gradient-to-br from-lavender-indigo to-very-light-blue px-2.5 py-1.5">
            <p className="my-1 text-xs text-white">Follow</p>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-xl font-semibold text-white">1.</span>{" "}
        <div className="flex w-full items-center justify-between">
          <User />
          <button className="my-[6.5px] rounded-lg bg-gradient-to-br from-lavender-indigo to-very-light-blue px-2.5 py-1.5">
            <p className="my-1 text-xs text-white">Follow</p>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-xl font-semibold text-white">1.</span>{" "}
        <div className="flex w-full items-center justify-between">
          <User />
          <button className="my-[6.5px] rounded-lg bg-gradient-to-br from-lavender-indigo to-very-light-blue px-2.5 py-1.5">
            <p className="my-1 text-xs text-white">Follow</p>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-xl font-semibold text-white">1.</span>{" "}
        <div className="flex w-full items-center justify-between">
          <User />
          <button className="my-[6.5px] rounded-lg bg-gradient-to-br from-lavender-indigo to-very-light-blue px-2.5 py-1.5">
            <p className="my-1 text-xs text-white">Follow</p>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-xl font-semibold text-white">1.</span>{" "}
        <div className="flex w-full items-center justify-between">
          <User />
          <button className="my-[6.5px] rounded-lg bg-gradient-to-br from-lavender-indigo to-very-light-blue px-2.5 py-1.5">
            <p className="my-1 text-xs text-white">Follow</p>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-xl font-semibold text-white">1.</span>{" "}
        <div className="flex w-full items-center justify-between">
          <User />
          <button className="my-[6.5px] rounded-lg bg-gradient-to-br from-lavender-indigo to-very-light-blue px-2.5 py-1.5">
            <p className="my-1 text-xs text-white">Follow</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopArtist;
