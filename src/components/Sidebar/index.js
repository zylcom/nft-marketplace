import React from "react";
import { CrossIcon, ETHLogo } from "src/assets";
import EthereumDisplay from "../EthereumDisplay";
import { Menu } from "src/components";

function Sidebar({ openMenu, clickHandler }) {
  return (
    <div
      className={`fixed top-0 left-0 z-10 h-full w-full bg-dark-gun-metal transition duration-500 ease-in-out md:w-1/2 lg:block lg:w-[120px] lg:translate-x-0 lg:bg-gun-metal ${
        openMenu ? "" : "-translate-x-full"
      }`}
    >
      <div className="relative z-10 flex border-b border-b-white/10 bg-dark-gun-metal py-6 px-1.5 lg:bg-gun-metal">
        <button className="cursor-pointer lg:hidden" onClick={clickHandler}>
          <img src={CrossIcon} alt="" className="w-10" title="Close menu" />
        </button>

        <div className="m-auto flex items-center gap-3 bg-gradient-to-br from-very-light-blue to-medium-orchid bg-clip-text text-transparent">
          <img src={ETHLogo} alt="" className="h-10 w-10 rounded-full" />
          <p className="text-lg font-semibold lg:hidden">CuanMakers</p>
        </div>
      </div>

      <div className="h-screen overflow-y-auto">
        <div className="relative z-10 my-7 px-4 lg:hidden">
          <EthereumDisplay />
        </div>

        <Menu />
      </div>
    </div>
  );
}

export default Sidebar;
