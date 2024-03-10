import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function GetStarted() {
  return (
    <>
      <div className=" w-full rounded-xl bg-[#0052fe]">
        <div className="p-[30px] flex flex-col justify-center items-center gap-6 text-center">
          <div className="font-bold text-white text-xl">
            <h1>Get Started with KoinX</h1>
            <h1>for Free</h1>
          </div>

          <p className="text-white text-sm">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>

          <Image width={200} height={200} className="w-[200px]" src="/girl.png" alt="" />

          <button className="flex gap-2 justify-center items-center py-2 px-6 bg-white rounded-lg font-semibold">
            Get Started for FREE <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
