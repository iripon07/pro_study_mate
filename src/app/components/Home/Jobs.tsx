"use client"

import Image from "next/image";
import Link from "next/link";
import vector from "../../../assets/Vector122.png";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



const Jobs = () => {
  return (
    <div className="my-12 px-6 md:px-10">
      <div className="mx-auto mb-[47px] max-w-[310px] font-poppins lg:max-w-[727px]">
        <div className="flex items-end justify-between">
          <hr
            style={{ border: "1.25px solid #4B51554D" }}
            className="hidden w-[139px] lg:block"
          />
          <h1 className="mx-auto text-[30px] font-semibold text-primary md:text-5xl">
            Recent Jobs!
          </h1>
          <hr
            style={{ border: "1.25px solid #4B51554D" }}
            className="hidden w-[139px] lg:block"
          />
        </div>
        <p className="mt-1 text-center text-lg font-semibold text-[#4B5155BF] md:mt-4 md:text-[22px]">
          Pick the one that fits your skill set
        </p>
      </div>

      <Swiper 
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
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
        <SwiperSlide className="pb-10"
        >
          <div
            style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
            className="rounded-xl px-[36px] py-[45px]"
          >
            <div className="flex">
              <Image
                width={63}
                height={63}
                src={vector}
                alt="Vector of Job's card"
                className="mr-3"
              ></Image>

              <div className="w-full text-sm">
                <h5 className="font-semibold text-primary">
                  Local Economies: A Study Approach
                </h5>
                <p className="font-medium text-[#4B5155]">Essay</p>
              </div>
            </div>

            <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
            <p className="text-[10px] text-[#4B5155]">
              Hiring a writer to create an assignment on &quot;Exploring Local
              Economies through Case Studies,&quot; focusing on research and
              analysis of unique economic strategies
            </p>
            <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
            <div className="flex justify-center">
              <Link
                href="#"
                className="font-poppins text-sm font-medium text-primary underline"
              >
                See Details
              </Link>
            </div>
            <div className="mt-2 flex justify-center">
              <button className="rounded bg-[#184E77] px-7 py-[9px] font-poppins text-xs font-semibold text-[#FFFFFF]">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pb-10">
          <div
            style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
            className="rounded-xl px-[36px] py-[45px]"
          >
            <div className="flex">
              <Image
                width={63}
                height={63}
                src={vector}
                alt="Vector of Job's card"
                className="mr-3"
              ></Image>

              <div className="w-full text-sm">
                <h5 className="font-semibold text-primary">
                  Local Economies: A Case Study Approach
                </h5>
                <p className="font-medium text-[#4B5155]">Essay</p>
              </div>
            </div>

            <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
            <p className="text-[10px] text-[#4B5155]">
              Hiring a writer to create an assignment on &quot;Exploring Local
              Economies through Case Studies,&quot; focusing on research and
              analysis of unique economic strategies
            </p>
            <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
            <div className="flex justify-center">
              <Link
                href="#"
                className="font-poppins text-sm font-medium text-primary underline"
              >
                See Details
              </Link>
            </div>
            <div className="mt-2 flex justify-center">
              <button className="rounded bg-[#184E77] px-7 py-[9px] font-poppins text-xs font-semibold text-[#FFFFFF]">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pb-10">
          <div
            style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
            className="rounded-xl px-[36px] py-[45px]"
          >
            <div className="flex">
              <Image
                width={63}
                height={63}
                src={vector}
                alt="Vector of Job's card"
                className="mr-3"
              ></Image>

              <div className="w-full text-sm">
                <h5 className="font-semibold text-primary">
                  Local Economies: A Case Study Approach
                </h5>
                <p className="font-medium text-[#4B5155]">Essay</p>
              </div>
            </div>

            <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
            <p className="text-[10px] text-[#4B5155]">
              Hiring a writer to create an assignment on &quot;Exploring Local
              Economies through Case Studies,&quot; focusing on research and
              analysis of unique economic strategies
            </p>
            <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
            <div className="flex justify-center">
              <Link
                href="#"
                className="font-poppins text-sm font-medium text-primary underline"
              >
                See Details
              </Link>
            </div>
            <div className="mt-2 flex justify-center">
              <button className="rounded bg-[#184E77] px-7 py-[9px] font-poppins text-xs font-semibold text-[#FFFFFF]">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pb-10">
          <div
            style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
            className="rounded-xl px-[36px] py-[45px]"
          >
            <div className="flex">
              <Image
                width={63}
                height={63}
                src={vector}
                alt="Vector of Job's card"
                className="mr-3"
              ></Image>

              <div className="w-full text-sm">
                <h5 className="font-semibold text-primary">
                  Local Economies: A Case Study Approach
                </h5>
                <p className="font-medium text-[#4B5155]">Essay</p>
              </div>
            </div>

            <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
            <p className="text-[10px] text-[#4B5155]">
              Hiring a writer to create an assignment on &quot;Exploring Local
              Economies through Case Studies,&quot; focusing on research and
              analysis of unique economic strategies
            </p>
            <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
            <div className="flex justify-center">
              <Link
                href="#"
                className="font-poppins text-sm font-medium text-primary underline"
              >
                See Details
              </Link>
            </div>
            <div className="mt-2 flex justify-center">
              <button className="rounded bg-[#184E77] px-7 py-[9px] font-poppins text-xs font-semibold text-[#FFFFFF]">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pb-10">
          <div
            style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
            className="rounded-xl px-[36px] py-[45px]"
          >
            <div className="flex">
              <Image
                width={63}
                height={63}
                src={vector}
                alt="Vector of Job's card"
                className="mr-3"
              ></Image>

              <div className="w-full text-sm">
                <h5 className="font-semibold text-primary">
                  Local Economies: A Case Study Approach
                </h5>
                <p className="font-medium text-[#4B5155]">Essay</p>
              </div>
            </div>

            <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
            <p className="text-[10px] text-[#4B5155]">
              Hiring a writer to create an assignment on &quot;Exploring Local
              Economies through Case Studies,&quot; focusing on research and
              analysis of unique economic strategies
            </p>
            <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
            <div className="flex justify-center">
              <Link
                href="#"
                className="font-poppins text-sm font-medium text-primary underline"
              >
                See Details
              </Link>
            </div>
            <div className="mt-2 flex justify-center">
              <button className="rounded bg-[#184E77] px-7 py-[9px] font-poppins text-xs font-semibold text-[#FFFFFF]">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div
          style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
          className="rounded-xl px-[36px] py-[45px]"
        >
          <div className="flex">
            <Image
              width={63}
              height={63}
              src={vector}
              alt="Vector of Job's card"
              className="mr-3"
            ></Image>

            <div className="w-full text-sm">
              <h5 className="font-semibold text-primary">
                Local Economies: A Case Study Approach
              </h5>
              <p className="font-medium text-[#4B5155]">Essay</p>
            </div>
          </div>

          <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
          <p className="text-[10px] text-[#4B5155]">
            Hiring a writer to create an assignment on &quot;Exploring Local
            Economies through Case Studies,&quot; focusing on research and
            analysis of unique economic strategies
          </p>
          <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
          <div className="flex justify-center">
            <Link
              href="#"
              className="font-poppins text-sm font-medium text-primary underline"
            >
              See Details
            </Link>
          </div>
          <div className="mt-2 flex justify-center">
            <button className="rounded bg-[#184E77] px-7 py-[9px] font-poppins text-xs font-semibold text-[#FFFFFF]">
              Apply Now
            </button>
          </div>
        </div>

        <div
          style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
          className="rounded-xl px-[36px] py-[45px]"
        >
          <div className="flex">
            <Image
              width={63}
              height={63}
              src={vector}
              alt="Vector of Job's card"
              className="mr-3"
            ></Image>

            <div className="w-full text-sm">
              <h5 className="font-semibold text-primary">
                Local Economies: A Case Study Approach
              </h5>
              <p className="font-medium text-[#4B5155]">Essay</p>
            </div>
          </div>

          <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
          <p className="text-[10px] text-[#4B5155]">
            Hiring a writer to create an assignment on &quot;Exploring Local
            Economies through Case Studies,&quot; focusing on research and
            analysis of unique economic strategies
          </p>
          <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
          <div className="flex justify-center">
            <Link
              href="#"
              className="font-poppins text-sm font-medium text-primary underline"
            >
              See Details
            </Link>
          </div>
          <div className="mt-2 flex justify-center">
            <button className="rounded bg-[#184E77] px-7 py-[9px] font-poppins text-xs font-semibold text-[#FFFFFF]">
              Apply Now
            </button>
          </div>
        </div>

        <div
          style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
          className="rounded-xl px-[36px] py-[45px]"
        >
          <div className="flex">
            <Image
              width={63}
              height={63}
              src={vector}
              alt="Vector of Job's card"
              className="mr-3"
            ></Image>

            <div className="w-full text-sm">
              <h5 className="font-semibold text-primary">
                Local Economies: A Case Study Approach
              </h5>
              <p className="font-medium text-[#4B5155]">Essay</p>
            </div>
          </div>

          <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
          <p className="text-[10px] text-[#4B5155]">
            Hiring a writer to create an assignment on &quot;Exploring Local
            Economies through Case Studies,&quot; focusing on research and
            analysis of unique economic strategies
          </p>
          <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
          <div className="flex justify-center">
            <Link
              href="#"
              className="font-poppins text-sm font-medium text-primary underline"
            >
              See Details
            </Link>
          </div>
          <div className="mt-2 flex justify-center">
            <button className="rounded bg-[#184E77] px-7 py-[9px] font-poppins text-xs font-semibold text-[#FFFFFF]">
              Apply Now
            </button>
          </div>
        </div>

        <div
          style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
          className="rounded-xl px-[36px] py-[45px]"
        >
          <div className="flex">
            <Image
              width={63}
              height={63}
              src={vector}
              alt="Vector of Job's card"
              className="mr-3"
            ></Image>

            <div className="w-full text-sm">
              <h5 className="font-semibold text-primary">
                Local Economies: A Case Study Approach
              </h5>
              <p className="font-medium text-[#4B5155]">Essay</p>
            </div>
          </div>

          <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
          <p className="text-[10px] text-[#4B5155]">
            Hiring a writer to create an assignment on &quot;Exploring Local
            Economies through Case Studies,&quot; focusing on research and
            analysis of unique economic strategies
          </p>
          <hr className="my-6" style={{ border: "1.25px solid #4B51554D" }} />
          <div className="flex justify-center">
            <Link
              href="#"
              className="font-poppins text-sm font-medium text-primary underline"
            >
              See Details
            </Link>
          </div>
          <div className="mt-2 flex justify-center">
            <button className="rounded bg-[#184E77] px-7 py-[9px] font-poppins text-xs font-semibold text-[#FFFFFF]">
              Apply Now
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Jobs;
