import React from "react";

const Jobs = () => {
  return (
    <div>
      <div className="mx-auto w-[727px]">
        <div className="flex items-end justify-between">
          <hr
            style={{ border: "1.25px solid #4B51554D" }}
            className="w-[139px]"
          />
          <h1 className="text-5xl font-semibold text-[#184E77]">
            Recent Jobs!
          </h1>
          <hr
            style={{ border: "1.25px solid #4B51554D" }}
            className="w-[139px]"
          />
        </div>
        <p className="mt-1 text-center text-[22px] font-semibold text-[#4B5155BF] lg:mt-4">
          Pick the one that fits your skill set
        </p>
      </div>
    </div>
  );
};

export default Jobs;
