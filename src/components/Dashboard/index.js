import React from "react";
import { Header, Category, Card } from "src/components";

function Dashboard() {
  return (
    <div className="gap-5 gap-y-7 md:grid md:grid-cols-12">
      <div className="md:col-span7 xl:col-span-8">
        <Header />
      </div>
      <div className="mt-6 md:order-3 md:col-span-7 md:mt-0 xl:col-span-8">
        <h1 className="text-xl font-semibold text-white">Explore</h1>
        <Category />
        <div className="outer-card-wrapper absolute mt-[127px] h-[90vw] w-[66vh] min-w-[400px] max-w-[410px] origin-top-left translate-y-[340px] -rotate-90 select-none overflow-y-auto md:relative md:mt-[83px] md:h-auto md:w-auto md:max-w-none md:transform-none">
          <div className="flex w-auto origin-top-left translate-x-96 rotate-90 flex-row gap-3 md:grid md:transform-none md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
