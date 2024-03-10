"use client";
import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import PrizeSlider from "../PrizeSlider/PrizeSlider";
export default function Performance() {
  return (
    <div className="w-full bg-[#ffff] sm:p-8 p-6 rounded-lg mt-6 ">
      <h1 className="font-semibold text-xl">Performance</h1>
      <div className="mt-8">
        <div className="flex w-full justify-between items-center">
          <div className="pr-5">
            <p className="whitespace-nowrap font-regular text-sm  md:text-md text-[#44475B]">
              Today&apos;s Low
            </p>
            <p className="pt-3 text-sm md:text-base text-[#44475B]">
              46,930.22
            </p>
          </div>
          <PrizeSlider percentage={60} prize={"48637"} />
          <div className="pl-5">
            <p className="whitespace-nowrap font-regular text-sm  md:text-md text-[#44475B]">
              Today&apos;s High
            </p>
            <p className="pt-3 text-sm md:text-base text-[#44475B]">
              49,343.83
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex w-full justify-between items-center">
          <div className="pr-5">
            <p className="whitespace-nowrap  font-regular text-sm  md:text-md text-[#44475B]">
              Today&apos;s Low
            </p>
            <p className="pt-3 text-sm md:text-base tezt-[#44475B]">
              46,930.22
            </p>
          </div>
          <PrizeSlider percentage={0} prize={0} />
          <div className="pl-5">
            <p className="whitespace-nowrap font-regular text-sm  md:text-md text-[#44475B]">
              Today&apos;s High
            </p>
            <p className="pt-3 text-sm md:text-base text-[#44475B]">
              49,343.83
            </p>
          </div>
        </div>
        <div className="text-[#44475B] mt-12 w-full">
          <h1 className="font-semibold text-lg flex gap-1 items-center">
            Fundamental
            <IoMdInformationCircle fill="gray" />
          </h1>
          <div className="mt-4 flex md:flex-col justify-between w-full">
            {/* right side */}
            <div className="md:w-full w-[45%]">
              <div className="border-b-2 border-gray-300 flex justify-between w-full h-[4rem] items-center">
                <p className="font-medium text-sm text-[#768396]">
                  Bitcoin Prize
                </p>
                <p className="text-[#111827] font-medium text-sm">$16,815.46</p>
              </div>

              <div className="border-b-2 border-gray-300 flex justify-between w-full h-[4rem] items-center">
                <p className="font-medium text-sm text-[#768396]">
                  24h Low / 24h High
                </p>
                <p className="text-[#111827] font-medium text-sm">
                  $16,382.07 / $16,874.12
                </p>
              </div>
              <div className="border-b-2 border-gray-300 flex justify-between w-full h-[4rem] items-center">
                <p className="font-medium text-sm text-[#768396]">
                  7d Low / 7d High
                </p>
                <p className="text-[#111827] font-medium text-sm">
                  $16,382.07 / $16,874.12
                </p>
              </div>
              <div className="border-b-2 border-gray-300 flex justify-between w-full h-[4rem] items-center">
                <p className="font-medium text-sm text-[#768396]">
                  Treding Volume
                </p>
                <p className="text-[#111827] font-medium text-sm">
                  $23,249,202,782
                </p>
              </div>
              <div className="border-b-2 border-gray-300 flex justify-between w-full h-[4rem] items-center">
                <p className="font-medium text-sm text-[#768396]">
                  Market Cap Rank
                </p>
                <p className="text-[#111827] font-medium text-sm">#1</p>
              </div>
            </div>
            {/* left side */}
            <div className="md:w-full w-[45%]">
              <div className="border-b-2 border-gray-300 flex justify-between w-full h-[4rem] items-center">
                <p className="md:font-medium font-sm text-sm text-[#768396]">
                  Market Cap
                </p>
                <p className="text-[#111827] font-medium text-sm">
                  $323,507,290,047
                </p>
              </div>
              <div className="border-b-2 border-gray-300 flex justify-between w-full h-[4rem] items-center">
                <p className="font-medium text-sm text-[#768396]">
                  Market Cap Dominance
                </p>
                <p className="text-[#111827] font-medium text-sm">38.343%</p>
              </div>
              <div className="border-b-2 border-gray-300 flex justify-between w-full h-[4rem] items-center">
                <p className="font-medium text-sm text-[#768396]">
                  Volume / Market Cap
                </p>
                <p className="text-[#111827] font-medium text-sm">0.0718</p>
              </div>
              <div className="border-b-2 border-gray-300 flex justify-between w-full h-[4rem] items-center">
                <p className="font-medium text-sm text-[#768396]">
                  All Time High
                </p>
                <div className="text-[#111827] font-medium text-sm text-right ">
                  <p className="font-medium">
                    $69,044.77 <span className="text-[#F7324C]">-75.6%</span>
                  </p>
                  <p className="font-regular text-[#111827] text-xs pt-1">
                    Nov 10, 2021 (about 1 year ago)
                  </p>
                </div>
              </div>
              <div className="border-b-2 border-gray-300 flex justify-between w-full h-[4rem] items-center">
                <p className="font-medium text-sm text-[#768396]">
                  All Time Low
                </p>
                <div className="text-[#111827] font-medium text-sm text-right">
                  <p className="font-medium">
                    $67.81 <span className="text-[#0FBA83]">24729.1%</span>
                  </p>
                  <p className="font-regular text-[#111827] text-xs pt-1">
                    Jul 06, 2013 (Over 9 years)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
