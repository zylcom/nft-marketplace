import React from "react";
import { Header, Category } from "src/components";

function Dashboard() {
  return (
    <div className="gap-5 gap-y-7 md:grid md:grid-cols-12">
      <div className="md:col-span7 xl:col-span-8">
        <Header />
      </div>
      <div className="mt-6 md:order-3 md:col-span-7 md:mt-0 xl:col-span-8">
        <h1 className="text-xl font-semibold text-white">Explore</h1>
        <Category />
      </div>
    </div>
  );
}

export default Dashboard;
