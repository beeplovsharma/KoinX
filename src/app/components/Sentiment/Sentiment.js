import Image from 'next/image';
import React from 'react'

const Sentiment = () => {
  return (
    <>
      <div className="w-full bg-white rounded-xl px-4 py-6">
        <h1 className="text-xl font-semibold">Sentiment</h1>

        <div className="container">
          <div className="key-events overflow-x-hidden">
            <h1 className="font-semibold">Key Events</h1>
            <div className="w-full">
              <div className="bg-[#e8f4fd] h-[150px] w-[320px] rounded-xl"></div>
            </div>
          </div>
          <div className="analyst">
            <h1 className="font-semibold">Analyst Estimates</h1>
            <Image src="/analytics.png" width={600} height={200} className="w-[600px]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sentiment