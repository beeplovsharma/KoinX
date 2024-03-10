import Image from 'next/image';
import React from 'react'
import { MdInfo } from "react-icons/md";
const Sentiment = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 bg-white rounded-xl px-4 py-6">
        <h1 className="text-xl font-semibold">Sentiment</h1>

        <div className="container flex flex-col gap-8">
          <div className="key-events overflow-x-hidden">
            <h1 className="font-semibold pb-2 flex gap-2 items-center">
              Key Events <MdInfo color="grey" />
            </h1>
            <div className="w-full">
              <div className="bg-[#e8f4fd] w-full rounded-xl px-2 py-4 flex justify-center items-start gap-2">
                <Image src="/newspaper.png" width={40} height={40} alt="" />
                <div>
                  <h1 className="font-bold">Lorem ipsum dolor sit amet</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro impedit praesentium dignissimos molestiae, veritatis
                    modi accusantium quidem velit aut. Voluptas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="analyst">
            <h1 className="font-semibold flex items-center gap-2">
              Analyst Estimates <MdInfo color="grey" />
            </h1>
            <Image
              src="/analytics.png"
              width={600}
              height={200}
              className="w-[600px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sentiment