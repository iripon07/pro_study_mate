import Image from "next/image";
import people from "../../../assets/business-people-working-together-table 1.png";

const Workshop = () => {
  return (
    <div className="my-10 px-6">
      <div className="mx-auto mb-12 w-[767px]">
        <div className="flex items-center justify-between">
          <hr
            style={{ border: "1.25px solid #4B51554D" }}
            className="w-[139px]"
          />
          <h1 className="text-5xl font-semibold text-[#184E77]">
            Workshop Events
          </h1>
          <hr
            style={{ border: "1.25px solid #4B51554D" }}
            className="w-[139px]"
          />
        </div>
        <p className="mt-1 text-center text-[22px] font-semibold text-[#4B5155BF] lg:mt-4">
          Explore the versatile platform at Pro Study Mate!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="shadow-[0_5px_15px_2px_rgba(100,100,111,0.2)]">
          <div className="group relative">
            <Image src={people} alt="Business people" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-70">
              <button className="rounded bg-white px-6 py-2 font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                View
              </button>
            </div>
          </div>
          <div className="p-6">
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
              <button className="rounded bg-white px-6 py-2 font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                View
              </button>
            </div>
          </div>
          <div className="p-6">
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
              <button className="rounded bg-white px-6 py-2 font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                View
              </button>
            </div>
          </div>
          <div className="p-6">
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
              <button className="rounded bg-white px-6 py-2 font-semibold text-primary opacity-0 shadow-lg transition-opacity duration-300 ease-in-out hover:bg-primary hover:text-white group-hover:opacity-100">
                View
              </button>
            </div>
          </div>
          <div className="p-6">
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
