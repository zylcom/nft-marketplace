import React from "react";
import { Avatar } from "src/components";

function User({ avatarUrl, name, info }) {
  return (
    <div className="flex max-w-full items-center truncate">
      <div className="mr-2">
        <Avatar img={avatarUrl} />
      </div>

      <div className="flex grow-0 flex-col">
        <p className="truncate text-sm font-medium text-white" title={name}>
          {name}
        </p>

        <p className="mt-1 text-xs text-[color:#878787]" title={info}>
          {info}
        </p>
      </div>
    </div>
  );
}

export default User;
