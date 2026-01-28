import { Swiper, SwiperSlide } from "swiper/react"


import slider1 from "../assets/timac/timac1.webp"
import slider2 from "../assets/timac/timac2.webp"
import slider3 from "../assets/timac/timac3.webp"
import slider4 from "../assets/timac/timac4.webp"
import slider5 from "../assets/timac/timac5.webp"
import slider6 from "../assets/timac/timac6.webp"


import { Autoplay, Navigation } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <Swiper modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            spaceBetween={20}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
             breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
            className="SwiperSlider"
        >
            <SwiperSlide>
                <img src={slider1} className="w-full h-full rounded-2xl" /></SwiperSlide>
            <SwiperSlide><img src={slider2} className="w-full h-full rounded-2xl"  alt="Timac agro india - srinithi graphic designer portfolio works" /></SwiperSlide>
            <SwiperSlide><img src={slider3} className="w-full h-full rounded-2xl"  alt="Timac agro india - srinithi graphic designer portfolio works"/></SwiperSlide>
            <SwiperSlide><img src={slider4} className="w-full h-full rounded-2xl"  alt="Timac agro india - srinithi graphic designer portfolio works"/></SwiperSlide>
            <SwiperSlide><img src={slider5} className="w-full h-full rounded-2xl"  alt="Timac agro india - srinithi graphic designer portfolio works"/></SwiperSlide>
            <SwiperSlide><img src={slider6} className="w-full  h-full rounded-2xl" alt="Timac agro india - srinithi graphic designer portfolio works" /></SwiperSlide>


        </Swiper>
    )
}

export default Slider