import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import "./HeroSlider.css";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
    >
      <SwiperSlide>
        <img src={banner1} className="w-full h-[500px] object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} className="w-full h-[500px] object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
