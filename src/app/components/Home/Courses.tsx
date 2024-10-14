import Image from "next/image";
import Hero from "../../../assets/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-platform-e-learning-platform-online-teaching-concept 1.png";

const Courses = () => {
  return (
    <div>
      <div
        style={{ border: "1px solid red" }}
        className="relative flex items-center justify-center"
      >
        <div style={{ border: "1px solid red" }} className="max-w-[48%]">
          <Image src={Hero} alt="Courses Hero" className="w-full"></Image>
        </div>{" "}
        <button className="absolute left-0 top-0 flex h-[55px] w-[236px] items-center justify-center rounded-xl bg-white font-poppins text-lg font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
          Politics
        </button>
        <button className="absolute left-1/4 top-1/4 flex h-[55px] w-[236px] items-center justify-center rounded-xl bg-white font-poppins text-lg font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
          Art & Music
        </button>
        <div className="absolute left-1/4 top-3/4 flex h-[55px] w-[236px] items-center justify-center rounded-xl bg-white font-poppins text-lg font-semibold text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
          Economic
        </div>
        <div className="absolute bottom-0 left-0 flex h-[55px] w-[236px] items-center justify-center rounded-xl text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
          <button className="font-poppins text-lg font-semibold">
            Politics
          </button>
        </div>
        <div className="absolute right-0 top-0 flex h-[55px] w-[236px] items-center justify-center rounded-xl text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
          <button className="font-poppins text-lg font-semibold">
            History
          </button>
        </div>
        <div className="absolute right-1/4 top-1/4 flex h-[55px] w-[236px] items-center justify-center rounded-xl text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
          <button className="font-poppins text-lg font-semibold">
            Chemistry{" "}
          </button>
        </div>{" "}
        <div className="absolute bottom-1/4 right-1/4 flex h-[55px] w-[236px] items-center justify-center rounded-xl text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
          <button className="font-poppins text-lg font-semibold">
            Civil Engineering{" "}
          </button>
        </div>{" "}
        <div className="absolute bottom-0 right-0 flex h-[55px] w-[236px] items-center justify-center rounded-xl text-primary shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)] transition duration-300 ease-in-out hover:bg-primary hover:text-white">
          <button className="font-poppins text-lg font-semibold">
            Social Science
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
