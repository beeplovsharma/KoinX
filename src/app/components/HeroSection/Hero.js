"use client";
import React, { useEffect, useState } from "react";
import PriceChart from "../PriceChart/PriceChart";
import GetStarted from "../GetStarted/GetStarted";
import TrendingCoins from "../TrendingCoins/TrendingCoins";
import Tokenomics from "../Tokenomics/Tokenomics";
import { MdOutlineArrowDropUp } from "react-icons/md";
import Team from "../Team/Team";
import About from "../About/About";
import Sentiment from "../Sentiment/Sentiment";
import Performance from "../Performance/Performance";
import Image from "next/image";

function Hero() {
  const [data, setData] = useState({
    inr: 5742621,
    usd: 69395,
    perc: 2.51,
  });
  const fetchData = async () => {
    try {
      const raw = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
      );
      if (raw.ok) {
        const res = await raw.json();
        setData({
          inr: res.bitcoin.inr,
          usd: res.bitcoin.usd,
          perc: res.bitcoin.usd_24h_change,
        });
      } else {
        console.error("Failed to fetch");
      }
    } catch (error) {
      console.log("Error during fetching", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="hero w-full bg-[#eff2f5]">
        <div className="container max-w-screen-[1150px] mx-auto flex lg:flex-col gap-[20px] p-[2vw]">
          <div className="container-left flex flex-col gap-5 w-[65%] lg:w-full h-full">
            <div className="bitcoin-graph w-full py-2 px-4 bg-[#ffffff] rounded-xl">
              <div className="flex items-center gap-2 py-3">
                <Image src="/btc.png" width={30} height={30} alt="" />
                <h1 className="font-bold text-lg">Bitcoin</h1>
                <p className="text-[10px] font-bold opacity-60">BTC</p>
                <button className="bg-[#768396] text-white text-[12px] rounded-md px-[5px] py-[5px] mx-[16px]">
                  Rank #1
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <h1 className="font-bold text-4xl">${data.usd}</h1>
                  <button className="text-[#2fb988] bg-[#ebf9f4] text-sm font-bold px-2 py-[2px] flex justify-center items-center">
                    <MdOutlineArrowDropUp size={25} />
                    {parseFloat(data.perc).toFixed(2)}%
                  </button>
                  <p className="opacity-60">(24h)</p>
                </div>
                <p className="font-semibold pb-4">₹{data.inr}</p>
              </div>

              <div className="h-[350px] font-bold lg:h-[250px]">
                <PriceChart />
              </div>
            </div>

            <div>
              <Performance />
            </div>

            <div>
              <Sentiment />
            </div>

            <div>
              <About />
            </div>

            <div className="tokenomics">
              <Tokenomics />
            </div>

            <div className="team">
              <Team />
            </div>
          </div>

          <div className="container-right w-[35%] lg:w-full h-full flex flex-col gap-2">
            <GetStarted />
            <TrendingCoins />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
