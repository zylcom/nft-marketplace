import React from "react";
import { ETHIcon } from "src/assets";

function EthereumDisplay() {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-gun-metal py-4 px-3">
      <img src={ETHIcon} alt="ETH" title="Ethereum" />
      <p className="text-white text-sm">969,696,969 ETH</p>
    </div>
  );
}

export default EthereumDisplay;
