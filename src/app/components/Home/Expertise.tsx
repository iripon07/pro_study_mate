import Image from "next/image";
import Student from "../../../assets/Student.png";
import Workshop from "../../../assets/Workshop.png";

const Expertise = () => {
  return (
    <div className="mt-[47px]">
      <h3 className="text-center font-nothing text-[#000000] text-[32px] mb-[34px]">
        Help students succeed and get paid for your expertise
      </h3>
      <div
        className="mx-auto max-w-[880px]"
      >
        <h3 className="mb-[112px] text-center font-prosto text-[40px] font-normal text-primary">
          Turn Expertise into Income
        </h3>

        <div
          className="flex justify-between"
        >
          <div
            style={{
              border: "4px solid rgb(24, 78, 119)",
              borderRadius: "8px",
              boxShadow: "0px 5px 15px 2px rgba(0, 0, 0, 0.15)",
            }}
            className="flex items-center justify-center px-4 py-2 text-center text-xl font-semibold text-primary"
          >
            <Image src={Student} alt="Student"></Image>
            <h6 className="ml-2">Help Student</h6>
          </div>
          <div
            style={{
              border: "4px solid rgb(24, 78, 119)",
              borderRadius: "8px",
              boxShadow: "0px 5px 15px 2px rgba(0, 0, 0, 0.15)",
            }}
            className="flex items-center justify-center px-4 py-2 text-center text-xl font-semibold text-primary"
          >
            <Image src={Workshop} alt="Student"></Image>
            <h6 className="ml-2">Organize Workshop</h6>
          </div>
        </div>
        <div
          className="mt-[54px] flex items-center justify-center"
        >
          <button className="rounded bg-[#1877F2] px-10 py-2 text-[40px] font-semibold text-white">
            Start Earning Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
