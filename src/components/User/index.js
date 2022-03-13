import React from "react";
import { Avatar } from "src/components";

function User() {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <Avatar img="https://picsum.photos/720" />
      </div>
      <div>
        <p className="text-sm font-medium text-white">Sabilillah</p>
        <p className="mt-1 text-xs text-[color:#878787]">@zylcom</p>
      </div>
    </div>
  );
}

export default User;
