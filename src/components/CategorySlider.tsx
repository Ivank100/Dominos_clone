import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CategorySlider.css";

export default function CategorySlider() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={3}
      spaceBetween={1}
      className="flex mt-6"
    >
      <SwiperSlide>
        <a href="#">Promotion</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">New Menu</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">Pizza</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">Chicken</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">Cheesy Baked Pasta</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">Cheesy Fold</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">Drinks</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">Side Dish</a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#">Dipping sauce</a>
      </SwiperSlide>
    </Swiper>
  );
}
