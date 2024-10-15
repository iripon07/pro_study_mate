import Image from "next/image";
import people from "../../../assets/Business.png";

const Workshop = () => {
  return (
    <div className="mb-[25px] mt-[30px]">

      <div className="mx-auto mb-6 md:max-w-[767px] md:mb-8 lg:mb-12">
        <div className="flex items-center justify-between">
          <hr
            style={{ border: "1.25px solid #4B51554D" }}
            className="hidden w-[139px] md:block"
          />
          <h1 className="text-[32px] mx-auto font-semibold text-[#184E77] md:text-4xl lg:text-5xl">
            Workshop Events
          </h1>
          <hr
            style={{ border: "1.25px solid #4B51554D" }}
            className="hidden w-[139px] md:block"
          />
        </div>
        <p className="mt-1 text-center md:text-[22px] text-base font-semibold text-[#4B5155BF] lg:mt-4">
          Explore the versatile platform at Pro Study Mate!
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:gap-6 gap-4 px-6 md:grid-cols-2 md:pl-[11px] lg:grid-cols-4">
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
      </div>
    </div>
  );
};

export default Workshop;
