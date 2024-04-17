import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { RxArrowRight } from "react-icons/rx";

import s1 from "../../assets/Images/s1.webp";
import s2 from "../../assets/Images/s2.avif";
import s3 from "../../assets/Images/s3.avif";
import s4 from "../../assets/Images/s4.avif";

const Banner = () => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-80 md:h-96 rounded-2xl">
            <img
              src={s1}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 rounded-2xl "></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <p className="text-white text-lg sm:text-3xl mb-2 sm:mb-4">
                Welcome to <span className="font-semibold">Cozy Dwellings</span>
              </p>
              <p className="text-white text-4xl sm:text-6xl font-medium mb-2 sm:mb-4">
                Manage Your Property
              </p>
              <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4">
                You will have everything nearby: supermarket, buses, station,
                the carmen neighborhood, etc.
              </p>
              <button className="btn glass px-4 py-2 sm:px-5 sm:py-3 text-lg sm:text-xl font-medium bg-green-700 text-white rounded-full flex items-center">
                Discover a Home{" "}
                <RxArrowRight className="ml-2 text-lg sm:text-xl font-semibold" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-80 sm:h-96 rounded-2xl">
            <img
              src={s2}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 rounded-2xl "></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <p className="text-white text-lg sm:text-3xl mb-2 sm:mb-4">
                Welcome to <span className="font-semibold">Cozy Dwellings</span>
              </p>
              <p className="text-white text-4xl sm:text-6xl font-medium mb-2 sm:mb-4">
                Manage Your Property
              </p>
              <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4">
                You will have everything nearby: supermarket, buses, station,
                the carmen neighborhood, etc.
              </p>
              <button className="btn glass px-4 py-2 sm:px-5 sm:py-3 text-lg sm:text-xl font-medium bg-green-700 text-white rounded-full flex items-center">
                Discover a Home{" "}
                <RxArrowRight className="ml-2 text-lg sm:text-xl font-semibold" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-80 sm:h-96 rounded-2xl">
            <img
              src={s3}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 rounded-2xl "></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <p className="text-white text-lg sm:text-3xl mb-2 sm:mb-4">
                Welcome to <span className="font-semibold">Cozy Dwellings</span>
              </p>
              <p className="text-white text-4xl sm:text-6xl font-medium mb-2 sm:mb-4">
                Manage Your Property
              </p>
              <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4">
                You will have everything nearby: supermarket, buses, station,
                the carmen neighborhood, etc.
              </p>
              <button className="btn glass px-4 py-2 sm:px-5 sm:py-3 text-lg sm:text-xl font-medium bg-green-700 text-white rounded-full flex items-center">
                Discover a Home{" "}
                <RxArrowRight className="ml-2 text-lg sm:text-xl font-semibold" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-80 sm:h-96 rounded-2xl">
            <img
              src={s4}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 rounded-2xl "></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <p className="text-white text-lg sm:text-3xl mb-2 sm:mb-4">
                Welcome to <span className="font-semibold">Cozy Dwellings</span>
              </p>
              <p className="text-white text-4xl sm:text-6xl font-medium mb-2 sm:mb-4">
                Manage Your Property
              </p>
              <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4">
                You will have everything nearby: supermarket, buses, station,
                the carmen neighborhood, etc.
              </p>
              <button className="btn glass px-4 py-2 sm:px-5 sm:py-3 text-lg sm:text-xl font-medium bg-green-700 text-white rounded-full flex items-center">
                Discover a Home{" "}
                <RxArrowRight className="ml-2 text-lg sm:text-xl font-semibold" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
