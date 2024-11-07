import servicePhoto from "@/assets/servicePhoto.png";
import Image from "next/image";
import checkBox from "@/assets/checkBox.png"

const Income = () => {
  return (
    <div className="container mx-auto px-4 my-6">
      <div className="flex">
        <div className="py-0 pl-0 md:py-9 md:pl-9">
          <p className="mb-[3px] pl-0 text-2xs font-normal text-grey md:mb-4 md:pl-2 2xl:text-2xl">
            Want to earn money
          </p>
          <p className="mb-[6px] text-xl font-semibold text-black md:mb-6 md:text-2xl lg:text-3xl xl:text-[40px]">
            Turn expertise into income
          </p>
          <p className="mb-5 pl-0 text-[8px] font-light text-black md:mb-7 md:pl-5 md:text-base xl:text-xl">
            Mentors earn money by helping students with assignments, course
            lessons, or skills. They apply to tasks, set their rates, and get
            paid once the work is done. They can also host paid events or
            workshops, offering expertise while earning income.
          </p>
          <div className="md:mb-6 mb-3">
            <p className="text-sm font-semibold text-grey md:text-base lg:text-xl xl:text-2xl">
              Key Points
            </p>
          </div>

          <div className="md:space-y-3 space-y-[10px] pl-2 text-[8px] font-normal text-grey md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            <div className="flex items-center">
              <Image
                className="mr-3 h-3 w-3 md:h-[22px] md:w-[22px]"
                src={checkBox}
                alt="CHeck box"
              ></Image>
              <p>Host paid events or workshops for additional income.</p>
            </div>
            <div className="flex items-center">
              <Image
                className="mr-3 h-3 w-3 md:h-[22px] md:w-[22px]"
                src={checkBox}
                alt="CHeck box"
              ></Image>
              <p>Apply to tasks and set your own rates.</p>
            </div>
            <div className="flex items-center">
              <Image
                className="mr-3 h-3 w-3 md:h-[22px] md:w-[22px]"
                src={checkBox}
                alt="CHeck box"
              ></Image>
              <p>Get paid after completing the task.</p>
            </div>
            <div className="flex items-center">
              <Image
                className="mr-3 h-3 w-3 md:h-[22px] md:w-[22px]"
                src={checkBox}
                alt="CHeck box"
              ></Image>
              <p>Host paid events or workshops for additional income.</p>
            </div>
          </div>
          <button className="md:mt-6 mt-5 rounded-[5px] bg-[#FE696A] md:px-[37.5px] px-3 md:py-[13.5px] py-[3px]  text-center md:text-xl text-2xs font-semibold text-white hover:opacity-80">
            Read more
          </button>
        </div>

        <div className="-mt-5 hidden w-full md:block">
          <Image
            className="w-full"
            src={servicePhoto}
            quality={100}
            alt="Service"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Income;
