import React from "react";
import { Header, Category, Card, TopArtist, Activity } from "src/components";

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
      <div className="top-artist-wrapper mt-[503px] rounded-[20px] bg-[#262D3A] p-5 md:order-2 md:col-span-5 md:mt-0 xl:col-span-4">
        <h1 className="mb-5 text-xl font-semibold text-white">Top Artist</h1>
        <TopArtist />
      </div>

      <div className="mt-8 md:order-4 md:col-span-5 md:mt-0 xl:col-span-4">
        <div className="rounded-[20px] bg-gun-metal px-5 pt-5 pb-0">
          <h1 className="font-semi-bold text-xl text-white">Recent Activity</h1>
          <div className="mt-3">
            <Activity />
          </div>
          <div className="mt-3">
            <Activity />
          </div>
          <div className="mt-3">
            <Activity />
          </div>
          <div className="mt-3">
            <Activity />
          </div>
          <div className="mt-3">
            <Activity />
          </div>
          <div className="mt-3">
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
