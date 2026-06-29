import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import "./HeroSlider.css";

export default function HeroSlider() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={banner1} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
