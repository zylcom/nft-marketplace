import React from "react";
import { DashboardBanner } from "src/assets";

function Header() {
  return (
    <div className="min-h-36 relative w-full rounded-[7.45px] bg-gradient-to-br from-lavender-indigo to-very-light-blue p-3 md:h-full md:rounded-[20px] md:px-10 md:py-[54px]">
      <div className="w-[214px] md:w-full">
        <h1 className="text-base font-semibold leading-6 text-white md:text-[length:40px] md:leading-[60px]">
          One Stop NFT Marketplace
        </h1>
        <p className="mt-[7px] text-[length:11px] text-white md:w-[377px] md:text-lg">
          Discover limited-edition digital artwork Create, Sell, and Collect
          yours now!
        </p>
        <div className="flex gap-[3.72px] md:gap-2.5">
          <button className="mt-[23px] w-[72px] rounded-[4px] bg-white p-1 md:mt-12 md:w-auto md:px-3 md:py-2.5 lg:py-3 lg:px-5">
            <p className="bg-gradient-to-br from-lavender-indigo to-very-light-blue bg-clip-text text-[length:8px] font-medium text-transparent md:text-sm">
              Start Create
            </p>
          </button>
          <button className="mt-[23px] w-[72px] rounded-[4px] bg-white p-1 md:mt-12 md:w-auto md:px-3 md:py-2.5 lg:py-3 lg:px-5">
            <p className="bg-gradient-to-br from-lavender-indigo to-very-light-blue bg-clip-text text-[length:8px] font-medium text-transparent md:text-sm">
              How It Works
            </p>
          </button>
        </div>
      </div>
      <img
        src={DashboardBanner}
        alt=""
        className="absolute bottom-0 right-0 md:h-auto md:w-full"
      />
    </div>
  );
}

export default Header;
