"use client"

import Image from "next/image";
import Members from "../../../assets/Members.png";
import Project from "../../../assets/Project.png";
import Reviews from "../../../assets/Reviews.png";
import Transaction from "../../../assets/Transaction.png";
import dynamic from "next/dynamic";

const Award = () => {

  const CountUp = dynamic(() => import("react-countup"), { ssr: false });

  return (
    <div className="container mx-auto mt-12 px-3">
      <div className="mx-auto grid  grid-cols-2 gap-4 font-poppins md:flex md:justify-between">
        <div
          style={{ boxShadow: "0px 5px 15px 2px #FB610726" }}
          className="py-[26px] md:px-7"
        >
          <Image className="mx-auto" src={Members} alt="Members"></Image>
          <CountUp start={0} end={50000}>
            {({ countUpRef, start }) => (
              <h2 className="mb-2 mt-2 text-center text-[28px] font-bold text-primary md:mb-1">
                <span ref={countUpRef}>0</span>
                <button onClick={start}></button>
              </h2>
            )}
          </CountUp>
          <h6 className="text-center text-xs font-semibold text-[#4B5155] md:text-base">
            Members Worldwide
          </h6>
        </div>

        <div
          style={{ boxShadow: "0px 5px 15px 2px #7B2CBF26" }}
          className="py-[26px] md:px-7"
        >
          <Image className="mx-auto" src={Project} alt="Members"></Image>

          <CountUp start={0} end={75000}>
            {({ countUpRef, start }) => (
              <h2 className="mb-2 mt-2 text-center text-[28px] font-bold text-primary md:mb-1">
                <span ref={countUpRef}>0</span>
                <button onClick={start}></button>
              </h2>
            )}
          </CountUp>

          <h6 className="text-center text-xs font-semibold text-[#4B5155] md:text-base">
            Project Completed
          </h6>
        </div>

        <div
          style={{ boxShadow: "0px 5px 15px 2px #691E0626" }}
          className="py-[26px] md:px-7"
        >
          <Image className="mx-auto" src={Transaction} alt="Members"></Image>
          <CountUp start={0} end={90}>
            {({ countUpRef, start }) => (
              <h2 className="mb-2 mt-2 text-center text-[28px] font-bold text-primary md:mb-1">
                <span ref={countUpRef}>0</span>
                <button onClick={start}> </button>&ensp;Million
              </h2>
            )}
          </CountUp>
          <h6 className="tmd:text-base text-center text-xs font-semibold text-[#4B5155]">
            Successful Transaction{" "}
          </h6>
        </div>

        <div
          style={{ boxShadow: "0px 5px 15px 2px #5C800126" }}
          className="py-[26px] md:px-7"
        >
          <Image className="mx-auto" src={Reviews} alt="Members"></Image>
          <CountUp start={0} end={100}>
            {({ countUpRef, start }) => (
              <h2 className="mb-2 mt-2 text-center text-[28px] font-bold text-primary md:mb-1">
                <span ref={countUpRef}>0</span>
                <button onClick={start}>%</button>
              </h2>
            )}
          </CountUp>
          <h6 className="text-center text-xs font-semibold text-[#4B5155] md:text-base">
            Based on 50+ Reviews
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Award;
