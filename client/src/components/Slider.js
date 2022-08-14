import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../data";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import CategoryItem from "./CategoryItem";

function Slider() {
  const [width, setWidth] = useState();

  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  window.onload = () => {
    setWidth(window.innerWidth);
  };

  return (
    <>
      <main className="grow  mt-10 px-2 sm:px-[40px]">
        <Swiper
          slidesPerView={width < 500 ? 1 : width < 900 ? 2 : 3}
          cssMode={true}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          // pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {categories.map((item) => (
            <SwiperSlide key={item.id}>
              <CategoryItem key={item.id} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </>
  );
}

export default Slider;
