import Image from "next/image";
import Hero from "@/assets/photos/StudentPlatform.png";

const Courses = () => {
  return (
    <div>
      <div className="container mx-auto mb-[80px] md:mb-0">
        <div className="relative flex items-center justify-center">
          <div className="w-full lg:max-w-[48%]">
            <Image
              src={Hero}
              alt="Courses Hero"
              quality={100}
              className="w-full"
            ></Image>
          </div>
          <button className="absolute -bottom-[16%] left-[10%] flex h-[55px] w-[155px] items-center justify-center rounded-xl bg-white font-poppins text-base font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white md:left-[6%] md:top-[9%] md:w-[236px] md:text-lg">
            Geography
          </button>
          <button className="absolute right-[3.5%] top-[47%] flex h-[55px] w-[182px] items-center justify-center rounded-xl bg-white font-poppins text-base font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white md:left-[17.5%] md:top-[39%] md:w-[236px] md:text-lg">
            Art & Music
          </button>
          <div className="absolute bottom-[50%] left-[0%] flex h-[55px] w-[182px] items-center justify-center rounded-xl bg-white font-poppins text-base font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white md:bottom-[19%] md:left-[16%] md:w-[236px] md:text-lg">
            Economic
          </div>
          <div className="">
            <button className="absolute bottom-[73.5%] left-[44%] flex h-[55px] w-[182px] items-center justify-center rounded-xl bg-white font-poppins text-base font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white md:-bottom-[9%] md:left-[10%] md:w-[236px] md:text-lg">
              Politics
            </button>
          </div>
          <div className="hidden md:block">
            <button className="absolute right-[19.5%] top-[9%] flex h-[55px] w-[236px] items-center justify-center rounded-xl bg-white font-poppins text-lg font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
              History
            </button>
          </div>
          <div className="hidden md:block">
            <button className="absolute right-[6%] top-[30%] flex h-[55px] w-[236px] items-center justify-center rounded-xl bg-white font-poppins text-lg font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
              Chemistry{" "}
            </button>
          </div>{" "}
          <div className="hidden md:block">
            <button className="absolute bottom-[21%] right-[17.7%] flex h-[55px] w-[236px] items-center justify-center rounded-xl bg-white font-poppins text-lg font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
              Civil Engineering{" "}
            </button>
          </div>{" "}
          <div className="hidden md:block">
            <button className="absolute bottom-[5%] right-[4.5%] flex h-[55px] w-[236px] items-center justify-center rounded-xl bg-white font-poppins text-lg font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
              Social Science
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
