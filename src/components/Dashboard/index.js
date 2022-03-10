import React from "react";
import { Header } from "src/components";

function Dashboard() {
  return (
    <div className="gap-5 gap-y-7 md:grid md:grid-cols-12">
      <div className="md:col-span7 xl:col-span-8">
        <Header />
      </div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
