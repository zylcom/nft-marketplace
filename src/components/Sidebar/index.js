import React from "react";
import { CrossIcon, ETHLogo } from "src/assets";
import EthereumDisplay from "../EthereumDisplay";
import { Menu } from "src/components";

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 z-10 hidden h-full w-full -translate-x-full bg-dark-gun-metal transition duration-500 ease-in-out md:w-1/2 lg:block lg:w-[120px] lg:translate-x-0 lg:bg-gun-metal">
      <div className="relative z-10 flex border-b border-b-white/10 bg-dark-gun-metal py-6 px-1.5 lg:bg-gun-metal">
        <img
          src={CrossIcon}
          alt=""
          className="w-10 cursor-pointer lg:hidden"
          title="Close menu"
        />
        <div className="m-auto flex items-center gap-3 bg-gradient-to-br from-very-light-blue to-medium-orchid bg-clip-text text-transparent">
          <img src={ETHLogo} alt="" className="h-10 w-10 rounded-full" />
          <p className="text-lg font-semibold lg:hidden">CuanMakers</p>
        </div>
      </div>

      <div>
        <div className="relative z-10 my-7 px-4 lg:hidden">
          <EthereumDisplay />
        </div>
        <div className="absolute left-0 bottom-0 h-screen w-full overflow-scroll">
          <div className="h-200px fixed w-full bg-dark-gun-metal md:w-1/2 lg:hidden"></div>
          <div className="pt-[200px] lg:pt-[88px]">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
