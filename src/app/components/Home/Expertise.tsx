import Image from "next/image";
import Student from "../../../assets/Student.png";
import Workshop from "../../../assets/Workshop.png";

const Expertise = () => {
  return (
    <div className="mt-[47px]">
      <h3 className="mb-[34px] hidden text-center font-handwriting text-[32px] text-[#000000] md:block">
        Help students succeed and get paid for your expertise
      </h3>
      <div className="mx-auto max-w-[880px]">
        <h3 className="mb-[14px] text-center font-prosto text-xl font-normal text-primary md:text-3xl lg:mb-[112px] lg:text-[40px]">
          Turn Expertise into Income
        </h3>

        <div className="flex justify-between px-2 md:flex-row">
          <div className="flex flex-col items-center justify-center rounded-lg py-2 text-center text-xl font-semibold text-primary md:min-w-[315.7px] md:flex-row md:border-4 md:border-primary">
            <Image src={Student} alt="Student"></Image>
            <h6 className="mt-2 md:ml-2 md:mt-0">Help Student</h6>
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg border-primary py-2 text-center text-xl font-semibold text-primary md:min-w-[315.7px] md:flex-row md:border-4">
            <Image src={Workshop} alt="Student"></Image>
            <h6 className="mt-2 md:ml-2 md:mt-0">Organize Workshop</h6>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center md:text-[40px] lg:mt-[54px]">
          <button className="rounded bg-[#1877F2] px-10 py-2 font-semibold text-white">
            Start Earning Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
