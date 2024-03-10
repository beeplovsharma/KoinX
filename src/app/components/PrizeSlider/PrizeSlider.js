import React from "react";
import { GoTriangleUp } from "react-icons/go";
export default function Performance({ percentage, prize }) {
  console.log(percentage, prize);
  return (
    <>
      <div className="w-full">
        <div className="w-full h-1  relative">
          <div className="rounded-sm bg-gradient-to-r from-red-600 via-yellow-300 to-green-500 w-full h-full"></div>
          {prize === 0 ? (
            " "
          ) : (
            <div
              className={`absolute -top-[1px] `}
              style={{ left: `${percentage}%` }}
            >
              <div className="text-[12px]  flex flex-col items-center text-[#44475B]">
                <GoTriangleUp />${prize}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
