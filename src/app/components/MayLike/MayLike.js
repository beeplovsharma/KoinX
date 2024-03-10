"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MayLike() {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "60px",
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
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
      <div className="w-full slider-container px-6 overflow-x-hidden">
        <div className=" max-w-[1000px] sm:w-full mx-auto py-6">
          <h1 className="font-semibold text-xl py-2">You May Also Like</h1>
          <Slider {...settings} className="h-[180px] overflow-hidden">
            {coins.map((coin, id) => (
              <div key={id} className="h-[300px]">
                <div className="w-[190px] sm:w-full flex flex-col sm:gap-3 sm:h-full h-[130px] border-[1px] rounded-xl p-3">
                  <div className="heading flex items-center gap-2">
                    <img
                      src={coin.item.small}
                      className="logo rounded-full w-[20px] sm:w-[40px]"
                      alt=""
                    />
                    <h1 className=" text-[12px]">{coin.item.symbol}</h1>
                    {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                      <p className="percentage bg-[#f0faf7] text-[#4ac596] text-[10px] px-[4px] py-[2px]">
                        {coin.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : (
                      <p className="percentage bg-[#fdf0ee] text-[#e96975] text-[10px] px-[4px] py-[2px]">
                        {coin.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </p>
                    )}
                  </div>
                  <h1 className="price">{coin.item.data.price}</h1>
                  <img
                    src={coin.item.data.sparkline}
                    className="graph sm:w-[350px] h-[50px]"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>

          <h1 className="font-semibold text-xl py-2">Trending Coins</h1>
          <Slider {...settings} className="h-[180px] overflow-hidden">
            {coins.map((coin, id) => (
              <div key={id} className="h-[300px]">
                <div className="w-[190px] sm:w-full flex flex-col sm:gap-3 sm:h-full h-[130px] border-[1px] rounded-xl p-3">
                  <div className="heading flex items-center gap-2">
                    <img
                      src={coin.item.small}
                      className="logo rounded-full w-[20px] sm:w-[40px]"
                      alt=""
                    />
                    <h1 className=" text-[12px]">{coin.item.symbol}</h1>
                    {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                      <p className="percentage bg-[#f0faf7] text-[#4ac596] text-[10px] px-[4px] py-[2px]">
                        {coin.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : (
                      <p className="percentage bg-[#fdf0ee] text-[#e96975] text-[10px] px-[4px] py-[2px]">
                        {coin.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </p>
                    )}
                  </div>
                  <h1 className="price">{coin.item.data.price}</h1>
                  <img
                    src={coin.item.data.sparkline}
                    className="graph sm:w-[350px] h-[50px]"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default MayLike;
