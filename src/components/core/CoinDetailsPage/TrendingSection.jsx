"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import GettingStarted from "@/components/common/GettingStarted";

export default function TrendingSection() {
  const [coinsData, setCoinsData] = useState([]);

  const fetchTrendingCoins = async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
    const data = await res.json();
    setCoinsData(data.coins.slice(0, 3));
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <div className="lg:w-[30%] w-[100%]  flex flex-col gap-5">
      <GettingStarted />

      <div className="bg-white rounded-lg overflow-auto p-4">
        <h1 className="text-xl font-medium">Trending Coins (24h)</h1>
        <div className="flex flex-col gap-4 my-5">
          {coinsData?.map((coin) => {
            return (
              <div key={coin?.item?.id} className="flex gap-2 items-center">
                <Image
                  src={coin?.item?.thumb}
                  width={25}
                  height={25}
                  alt={coin?.item?.symbol}
                  className="rounded-full border"
                />
                <span className="flex-1 text-sm">
                  {coin?.item?.name} ({coin?.item?.symbol})
                </span>

                <span
                  className={`text-xs w-[70px] ${
                    coin?.item?.data?.price_change_percentage_24h?.usd > 0
                      ? "text-green-600 bg-green-100"
                      : "text-red-500 bg-red-100"
                  } p-1 rounded flex items-center gap-1`}
                >
                  {coin?.item?.data?.price_change_percentage_24h?.usd > 0 ? (
                    <TiArrowSortedUp fill="rgb(22, 163, 74)" />
                  ) : (
                    <TiArrowSortedDown fill="rgb(239, 68, 68)" />
                  )}
                  {`${coin?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                    2
                  )} %`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
