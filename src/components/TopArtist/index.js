import React, { useEffect, useState } from "react";
import { User } from "src/components";
import { getAllUsers } from "src/services/apiServices";

function TopArtist() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const result = await getAllUsers();

      setUsers(result.data);
    }

    fetchUsers();
  }, []);

  return (
    <div className="flex max-h-80 flex-col gap-y-5 overflow-y-auto">
      {users.map((user, index) => (
        <div className="flex items-center" key={user.id}>
          <span className="mr-2 text-xl font-semibold text-white">
            {index + 1}.
          </span>{" "}
          <div className="flex w-full items-center justify-between gap-x-2 truncate">
            <User {...user} info={`@${user.username}`} />

            <button className="my-[6.5px] rounded-lg bg-gradient-to-br from-lavender-indigo to-very-light-blue px-2.5 py-1.5">
              <p className="my-1 text-xs text-white">Follow</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopArtist;
