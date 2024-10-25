import Link from "next/link";


const page = () => {
  return (
    <div>
      <div
        className="mx-auto max-w-[1376px] font-poppins"
        style={{ border: "1px solid red" }}
      >
        <h3 className="mb-5 text-center text-[40px] font-medium text-primary">
          Please Choose Your Topics Of Interest
        </h3>
        <h6 className="text-center text-xl font-medium text-[#4B5155CC]">
          Please Choose Your Topics Of Interest
          <span className="text-red">*</span>
        </h6>

        <div className="mb-[96px] mt-[72px] grid grid-cols-4 gap-x-4 gap-y-12 text-2xl font-medium">
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Political Science
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Sociology
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Psychology
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Economics
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            History
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Biology
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Philosophy
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            English Literature
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Chemistry
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Marketing
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Business Administration
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Environmental Science
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Nursing
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Education
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Anthropology
          </button>
          <button className="w-full py-[7px] shadow-[0px_5px_15px_2px_#184e7726] duration-300 hover:bg-primary hover:text-white">
            Computer Science
          </button>
        </div>
        <div className="flex items-center justify-center text-base font-semibold">
          <div>
            <Link
              href="/"
              className="mb-3 block rounded-lg bg-primary px-[80px] py-[13px] text-white"
            >
              Continue
            </Link>
            <div className="flex justify-center items-center">
              <Link
               
                href="/"
                className="text-center text-primary"
              >
                Skip for now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page