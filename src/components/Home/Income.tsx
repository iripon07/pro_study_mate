import servicePhoto from "@/assets/servicePhoto.png";
import Image from "next/image";
import checkBox from "@/assets/checkBox.png"

const Income = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="py-9 pl-9">
          <p className="mb-4 pl-2 text-2xl font-normal text-grey">
            Want to earn money
          </p>
          <p className="mb-6 text-[40px] font-semibold text-black">
            Turn expertise into income
          </p>
          <p className="mb-7 text-xl pl-5 font-light text-black">
            Mentors earn money by helping students with assignments, course
            lessons, or skills. They apply to tasks, set their rates, and get
            paid once the work is done. They can also host paid events or
            workshops, offering expertise while earning income.
          </p>
          <div className="mb-6">
            <p className="text-2xl font-semibold text-grey">Key Points</p>
          </div>

          <div className="space-y-3 text-xl font-normal text-grey pl-2">
            <div className="flex items-center">
              <Image className="mr-2" src={checkBox} alt="CHeck box"></Image>
              <p>Host paid events or workshops for additional income.</p>
            </div>
            <div className="flex items-center">
              <Image className="mr-2" src={checkBox} alt="CHeck box"></Image>
              <p>Apply to tasks and set your own rates.</p>
            </div>
            <div className="flex items-center">
              <Image className="mr-2" src={checkBox} alt="CHeck box"></Image>
              <p>Get paid after completing the task.</p>
            </div>
            <div className="flex items-center">
              <Image className="mr-2" src={checkBox} alt="CHeck box"></Image>
              <p>Host paid events or workshops for additional income.</p>
            </div>
          </div>
          <button className="mt-6 rounded-[5px] hover:opacity-80 text-center bg-[#FE696A] px-[37.5px]  py-[13.5px] text-xl font-semibold text-white">
            Read more
          </button>
        </div>
        <div  className="w-full -mt-5">
          <Image className="w-full" src={servicePhoto} quality={100} alt="Service"></Image>
        </div>
      </div>
    </div>
  );
};

export default Income;
