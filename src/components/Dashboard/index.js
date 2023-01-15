import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header, Category, Card, TopArtist, Activity } from "src/components";
import { getPostsByCategoryId } from "src/services/apiServices";
import { activities } from "src/utils/data";

import "swiper/css";
import "swiper/css/pagination";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  function onChangeCategoryId(id) {
    setCategoryId(id);
  }

  useEffect(() => {
    async function fetchPosts() {
      if (categoryId !== null) {
        const result = await getPostsByCategoryId(categoryId);

        setPosts(result.data);
      }
    }

    fetchPosts();
  }, [categoryId]);

  return (
    <div className="gap-5 gap-y-7 md:grid md:grid-cols-12">
      <div className="md:col-span-7 xl:col-span-8">
        <Header />
      </div>
      <div className="mt-6 md:order-3 md:col-span-7 md:mt-0 xl:col-span-8">
        <h1 className="text-xl font-semibold text-white">Explore</h1>
        <Category
          categoryId={categoryId}
          changeCategoryIdHandler={onChangeCategoryId}
        />

        <Swiper
          breakpoints={{
            640: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="top-20"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <Card {...post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="top-artist-wrapper mt-[503px] rounded-[20px] bg-[#262D3A] p-5 md:order-2 md:col-span-5 md:mt-0 xl:col-span-4">
        <h1 className="mb-5 text-xl font-semibold text-white">Top Artist</h1>
        <TopArtist />
      </div>

      <div className="mt-8 md:order-4 md:col-span-5 md:mt-0 xl:col-span-4">
        <div className="rounded-[20px] bg-gun-metal px-5 pt-5 pb-0">
          <h1 className="font-semi-bold text-xl text-white">Recent Activity</h1>
          {activities.map((activity) => (
            <div key={activity.id} className="mt-3">
              <Activity activity={activity} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
