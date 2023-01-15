import React from "react";
import { User } from "src/components";

function Activity({ activity }) {
  return (
    <div className="rounded-xl bg-white/5 p-3">
      <User {...activity} info={activity.activity} />
    </div>
  );
}

export default Activity;
