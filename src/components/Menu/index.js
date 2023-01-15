import React from "react";
import {
  ActivityIcon,
  CollectionIcon,
  DashboardIcon,
  SettingIcon,
  TransactionIcon,
} from "src/assets";
import { MenuItem } from "src/components";

function Menu() {
  return (
    <div className="flex flex-col py-6">
      <MenuItem img={DashboardIcon} text="Dashboard" />
      <MenuItem img={ActivityIcon} text="Activity" />
      <MenuItem img={TransactionIcon} text="Transactions" />
      <MenuItem img={CollectionIcon} text="Collections" />
      <MenuItem img={SettingIcon} text="Settings" />
    </div>
  );
}

export default Menu;
