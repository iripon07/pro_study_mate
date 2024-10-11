import Image from 'next/image';
import React from 'react'
import people from "../../../assets/business-people-working-together-table 1.png"

const Workshop = () => {
  return (
    <div>
      <div className="mx-auto w-[767px]">
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

      <div className="grid grid-cols-4 gap-3">
        <div
          style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
          className="w-332px h-[293px]"
        >
          <Image src={people} alt="Business people " className='w-full'></Image>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-[#184E77]">
              A workshop Environmental Science
            </h3>
            <p className="text-[8px] font-normal text-[#4B5155BF]">
              <small>20th March, 2024 | 12.00 pm (GMT +6.00)</small>
            </p>
          </div>
        </div>

        <div
          style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
          className="w-332px h-[293px]"
        >
          <Image src={people} alt="Business people "></Image>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-[#184E77]">
              A workshop Environmental Science
            </h3>
            <p className="text-[8px] font-normal text-[#4B5155BF]">
              <small>20th March, 2024 | 12.00 pm (GMT +6.00)</small>
            </p>
          </div>
        </div>

        <div
          style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
          className="w-332px h-[293px]"
        >
          <Image src={people} alt="Business people "></Image>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-[#184E77]">
              A workshop Environmental Science
            </h3>
            <p className="text-[8px] font-normal text-[#4B5155BF]">
              <small>20th March, 2024 | 12.00 pm (GMT +6.00)</small>
            </p>
          </div>
        </div>

        <div
          style={{ boxShadow: `rgba(100, 100, 111, 0.2) 0px 5px 15px 2px` }}
          className="w-332px h-[293px]"
        >
          <Image src={people} alt="Business people "></Image>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-[#184E77]">
              A workshop Environmental Science
            </h3>
            <p className="text-[8px] font-normal text-[#4B5155BF]">
              <small>20th March, 2024 | 12.00 pm (GMT +6.00)</small>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Workshop