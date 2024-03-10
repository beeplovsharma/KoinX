"use client";
import React, { useEffect, useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

function TrendingCoins() {
  const [coins, setCoins] = useState([]);

  const fetchCoins = () => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((raw) => raw.json())
      .then((data) => setCoins(data.coins));
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <>
      <div className="w-full h-[200px] bg-white rounded-xl">
        <div className="p-4">
          <h1 className="font-semibold text-xl">Trending Coins (24h)</h1>

          <div className="flex flex-col gap-4 pt-4">
            {coins
              .filter((coin, id) => id < 3)
              .map((coin, id) => (
                <div key={id} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[30px] rounded-full"
                      src={coin.item.small}
                      alt=""
                    />
                    <h1 className=" capitalize">{coin.item.id}</h1>
                  </div>

                  <span className="bg-[#ebf9f4] text-[#14b079] px-2 py-[2px] rounded-md flex items-center">
                    {coin.item.data.price_change_percentage_24h.btc > 0 ? (
                      <MdArrowDropUp size={25} />
                    ) : (
                      <MdArrowDropDown size={25} />
                    )}
                    {coin.item.data.price_change_percentage_24h.btc.toFixed(2)}%
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingCoins;
