import React from "react";
import {
  ArrowDownIcon,
  ChatIcon,
  ETHLogo,
  MenuIcon,
  NotifIcon,
  SearchIcon,
} from "src/assets";
import { Icon, Avatar, EthereumDisplay } from "src/components";

function Navbar() {
  return (
    <div className="grid grid-cols-2 items-center gap-2 border-b border-b-[#d4a2a2]/10 p-4 sm:grid-cols-12 sm:gap-5">
      <div className="nav-menu col-span-1 flex w-full sm:col-span-8">
        <img
          src={MenuIcon}
          alt=""
          title="Menu"
          className="w-6 cursor-pointer lg:hidden"
        />
        <div className="grid w-full grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2 mx-2 grid items-center rounded-lg bg-gun-metal py-4 px-3 sm:mx-5 lg:ml-0">
            <label htmlFor="search" className="flex w-full">
              <img
                src={SearchIcon}
                alt=""
                title="Search"
                className="mx-2.5 hidden w-6 sm:block"
              />
              <input
                type="text"
                className="mx-0 w-full bg-transparent text-white focus:outline-none focus:ring-0 sm:ml-2.5"
                name="search"
                id="search"
                placeholder="Search"
              />
            </label>
          </div>
          <div className="hidden min-w-[172px] lg:block">
            <EthereumDisplay />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between sm:col-span-4">
        <div className="flex gap-2 lg:justify-between lg:gap-5">
          <Icon img={ChatIcon} iconName="Messages" />
          <Icon img={NotifIcon} iconName="Notification" />
        </div>
        <div className="flex items-center gap-x-4">
          <Avatar img={ETHLogo} />
          <p className="hidden text-sm text-white lg:block">Zylcom</p>
          <img
            src={ArrowDownIcon}
            alt=""
            title="Account settings"
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
