import Image from "next/image";
import people from "../../../assets/business-people-working-together-table 1.png";

const Experience = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="group relative h-80 w-64 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={people}
          alt="Product Image"
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:blur-md"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
