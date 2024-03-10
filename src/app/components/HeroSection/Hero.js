import React from "react";
import PriceChart from "../PriceChart/PriceChart";
import GetStarted from "../GetStarted/GetStarted";
import TrendingCoins from "../TrendingCoins/TrendingCoins";
import Tokenomics from "../Tokenomics/Tokenomics";
import Team from "../Team/Team";
import About from "../About/About";
import Sentiment from "../Sentiment/Sentiment";
import Performance from "../Performance/Performance";
import Image from "next/image";

function Hero() {
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
