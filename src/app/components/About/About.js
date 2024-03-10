import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <div className="w-full bg-white rounded-xl px-4 py-6">
        <h1 className="text-xl font-semibold pb-2">About Bitcoin</h1>

        <div className="flex flex-col gap-2 py-4">
          <h1 className="font-semibold">What is Bitcoin?</h1>
          <p className="text-sm">
            Bitcoins price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="border-[1px]"></div>

        <div className="py-4">
          <h1 className="font-semibold text-xl pb-4">
            Already Holding Bitcoins?
          </h1>
          <div className="w-full flex sm:flex-col gap-4">
            <Image
              src="/about-1.png"
              width={350}
              height={350}
              // className="w-[350px]"
              alt=""
            />
            <Image
              src="/about-2.png"
              width={350}
              height={0}
              className="w-[350px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
