"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import people from "@/assets/photos/Business.png";

const Workshop = () => {
  return (
    <div className="mb-[25px] mt-9 md:mt-[70px] px-2">
      <div className="mx-auto mb-6 md:mb-8 md:max-w-[767px] lg:mb-12">
        <div className="flex items-center justify-between">
          <hr
            style={{ border: "1.25px solid #4B51554D" }}
            className="hidden w-[139px] md:block"
          />
          <h1 className="mx-auto text-[32px] font-semibold text-[#184E77] md:text-4xl lg:text-5xl">
            Workshop Events
          </h1>
          <hr
            style={{ border: "1.25px solid #4B51554D" }}
            className="hidden w-[139px] md:block"
          />
        </div>
        <p className="mt-1 text-center text-base font-semibold text-[#4B5155BF] md:text-[22px] lg:mt-4">
          Explore the versatile platform at Pro Study Mate!
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="pb-10">
          <div className="shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)]">
            <div className="group relative">
              <Image src={people} alt="Business people" className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-70">
                <button className="rounded bg-white px-7 py-[9px] font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                  View
                </button>
              </div>
            </div>
            <div className="pb-[21px] pl-[26px] pt-[18px]">
              <h3 className="text-sm font-semibold text-[#184E77]">
                A Workshop on Environmental Science
              </h3>
              <p className="text-xs text-[#4B5155BF]">
                <small>20th March, 2024 | 12.00 PM (GMT +6.00)</small>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pb-10">
          <div className="shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)]">
            <div className="group relative">
              <Image src={people} alt="Business people" className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-70">
                <button className="rounded bg-white px-7 py-[9px] font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                  View
                </button>
              </div>
            </div>
            <div className="pb-[21px] pl-[26px] pt-[18px]">
              <h3 className="text-sm font-semibold text-[#184E77]">
                A Workshop on Environmental Science
              </h3>
              <p className="text-xs text-[#4B5155BF]">
                <small>20th March, 2024 | 12.00 PM (GMT +6.00)</small>
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="pb-10">
          <div className="shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)]">
            <div className="group relative">
              <Image src={people} alt="Business people" className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-70">
                <button className="rounded bg-white px-7 py-[9px] font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                  View
                </button>
              </div>
            </div>
            <div className="pb-[21px] pl-[26px] pt-[18px]">
              <h3 className="text-sm font-semibold text-[#184E77]">
                A Deadshop on Environmental Science
              </h3>
              <p className="text-xs text-[#4B5155BF]">
                <small>20th March, 2024 | 12.00 PM (GMT +6.00)</small>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pb-10">
          <div className="shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)]">
            <div className="group relative">
              <Image src={people} alt="Business people" className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-70">
                <button className="rounded bg-white px-7 py-[9px] font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                  View
                </button>
              </div>
            </div>
            <div className="pb-[21px] pl-[26px] pt-[18px]">
              <h3 className="text-sm font-semibold text-[#184E77]">
                A Workshop on Environmental Science
              </h3>
              <p className="text-xs text-[#4B5155BF]">
                <small>20th March, 2024 | 12.00 PM (GMT +6.00)</small>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pb-10">
          <div className="shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)]">
            <div className="group relative">
              <Image src={people} alt="Business people" className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-70">
                <button className="rounded bg-white px-7 py-[9px] font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                  View
                </button>
              </div>
            </div>
            <div className="pb-[21px] pl-[26px] pt-[18px]">
              <h3 className="text-sm font-semibold text-[#184E77]">
                A Workshop on Environmental Science
              </h3>
              <p className="text-xs text-[#4B5155BF]">
                <small>20th March, 2024 | 12.00 PM (GMT +6.00)</small>
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* <div className="grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:gap-6 md:pl-[11px] lg:grid-cols-4">


        <div className="shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)]">
          <div className="group relative">
            <Image src={people} alt="Business people" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-70">
              <button className="rounded bg-white px-7 py-[9px] font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                View
              </button>
            </div>
          </div>
          <div className="pb-[21px] pl-[26px] pt-[18px]">
            <h3 className="text-sm font-semibold text-[#184E77]">
              A Workshop on Environmental Science
            </h3>
            <p className="text-xs text-[#4B5155BF]">
              <small>20th March, 2024 | 12.00 PM (GMT +6.00)</small>
            </p>
          </div>
        </div>

        <div className="shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)]">
          <div className="group relative">
            <Image src={people} alt="Business people" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-70">
              <button className="rounded bg-white px-7 py-[9px] font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                View
              </button>
            </div>
          </div>
          <div className="pb-[21px] pl-[26px] pt-[18px]">
            <h3 className="text-sm font-semibold text-[#184E77]">
              A Workshop on Environmental Science
            </h3>
            <p className="text-xs text-[#4B5155BF]">
              <small>20th March, 2024 | 12.00 PM (GMT +6.00)</small>
            </p>
          </div>
        </div>

        <div className="shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)]">
          <div className="group relative">
            <Image src={people} alt="Business people" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-70">
              <button className="rounded bg-white px-7 py-[9px] font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                View
              </button>
            </div>
          </div>
          <div className="pb-[21px] pl-[26px] pt-[18px]">
            <h3 className="text-sm font-semibold text-[#184E77]">
              A Workshop on Environmental Science
            </h3>
            <p className="text-xs text-[#4B5155BF]">
              <small>20th March, 2024 | 12.00 PM (GMT +6.00)</small>
            </p>
          </div>
        </div>

        <div className="shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)]">
          <div className="group relative">
            <Image src={people} alt="Business people" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-70">
              <button className="rounded bg-white px-7 py-[9px] font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                View
              </button>
            </div>
          </div>
          <div className="pb-[21px] pl-[26px] pt-[18px]">
            <h3 className="text-sm font-semibold text-[#184E77]">
              A Workshop on Environmental Science
            </h3>
            <p className="text-xs text-[#4B5155BF]">
              <small>20th March, 2024 | 12.00 PM (GMT +6.00)</small>
            </p>
          </div>
        </div>


      </div> */}
    </div>
  );
};

export default Workshop;
