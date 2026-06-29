import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CategorySlider.css";

export default function CategorySlider() {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={1}
        className="flex mt-6"
      >
        <SwiperSlide className="flex justify-center">
          <a href="#">Promotion</a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <a href="#">New Menu</a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <a href="#">Pizza</a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <a href="#">Chicken</a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <a href="#">Cheesy Baked Pasta</a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <a href="#">Cheesy Fold</a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <a href="#">Drinks</a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <a href="#">Side Dish</a>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <a href="#">Dipping sauce</a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
