"use client";
import React, { useEffect, useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import AboutCoin from "./AboutCoin";
import Tokenomics from "./Tokenomics";
import Team from "./Team";

const tabs = [
  "Overview",
  "Fundamental",
  "News_Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const timeLine = ["1D", "5D", "1M", "3M", "6M", "1Y", "YTD", "ALL"];

export default function CoinInfo({ currentCoin }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [coinDetails, setCoinDetails] = useState({});
  const [coinPricing, setCoinPricing] = useState({});
  const [selectedTimeLine, setSelectedTimeLine] = useState(timeLine[0]);

  const [errorState, setErrorState] = useState(false)

  const getCoinDetails = async (coin) => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
      const data = await res.json();

      const res2 = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=inr%2Cusd&include_24hr_change=true`
      );
      const data2 = await res2.json();

      setCoinDetails(data);
      setCoinPricing(data2[coin]);
    } catch (error) {
      console.log("Error in getCoinDetails: ", error);
      setErrorState(true)
    }
  };

  

  useEffect(() => {
    getCoinDetails(currentCoin);
  }, [currentCoin]);

  return (
    <>
      {(errorState || coinDetails?.error) ? (
        <div className="container border-2 border-dashed border-slate-500 rounded-md flex items-center justify-center mx-auto px-4 text-5xl text-center font-light py-10 text-slate-500">
          Sorry, Coin not found
        </div>
      ) : (
        <div className="lg:w-[70%] w-[100%]  flex flex-col gap-5">
          {/* Coin Price and Graph */}
          <div className="bg-white rounded-lg overflow-auto px-4 pb-6 pt-4">
            {/* Coin Details */}
            <div className="flex flex-row items-center mx-2 mt-0 md:mt-3">
              <div className="rounded-full border">
                <Image
                  src={coinDetails?.image?.large}
                  width={38}
                  height={38}
                  alt={coinDetails?.name}
                  className="bg-gray-500/0 rounded-full"
                />
              </div>
              <h1 className="text-xl font-medium capitalize px-2 pb-1">
                {coinDetails?.name}
              </h1>
              <h2 className="text-sm font-medium uppercase -mt-1 text-slate-600">
                {coinDetails?.symbol}
              </h2>

              <div className="bg-gray-500 p-2 text-sm md:text-base rounded-md text-white ml-10">
                Rank #<span>{coinDetails?.market_cap_rank}</span>
              </div>
            </div>

            {/* Coin Pricing */}
            <div className="mx-2 py-2 md:py-5 border-b-2 my-1 md:my-3 md:mb-7 mb-3">
              <div className="flex items-center">
                {/* USD Rate */}
                <p className="text-2xl md:text-3xl font-medium">
                  $
                  {coinPricing?.usd?.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </p>

                {/* 24H Change */}
                <p
                  className={`text-base mg:text-lg mx-5  ${
                    coinPricing?.usd_24h_change > 0
                      ? "text-green-600 bg-green-100"
                      : "text-red-500 bg-red-100"
                  }  px-2 font-medium py-1 rounded flex flex-row gap-x-1 items-center text-xs`}
                >
                  {coinPricing?.usd_24h_change > 0 ? (
                    <TiArrowSortedUp fill="rgb(22, 163, 74)" />
                  ) : (
                    <TiArrowSortedDown fill="rgb(239, 68, 68)" />
                  )}
                  {coinPricing?.usd_24h_change?.toFixed(2)}%
                </p>

                <span className="text-slate-500">(24H)</span>
              </div>

              {/* INR Rate */}
              <p className="text-sm mg:text-lg">
                ₹{" "}
                {coinPricing?.inr?.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>

            {/* Price Margin */}
            <div className="mx-2 mb-7 font-medium text-lg flex flex-col gap-3 md:items-center md:flex-row">
              <div className="flex-1 text-base md:text-xl">
                <span className="capitalize">{currentCoin}</span> Price Chart
                (USD)
              </div>

              <div className="flex flex-row gap-1 md:gap-3 text-slate-500 text-xs md:text-base">
                {timeLine?.map((time, index) => {
                  return (
                    <span
                      key={index}
                      className={`${
                        selectedTimeLine === time
                          ? "text-blue-500 bg-blue-200/50 px-2 rounded-full"
                          : "px-2"
                      }`}
                      onClick={() => setSelectedTimeLine(time)}
                    >
                      {time}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Graph View */}
            <div className="bg-black/30 w-fit mx-auto">
              <TradingViewWidget selectedTimeLine={selectedTimeLine} />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-row gap-x-8 border-b border-slate-300/80 text-slate-900 font-medium overflow-auto">
            {tabs?.map((tab, index) => {
              return (
                <div
                  key={index}
                  className={` ${
                    activeTab === tab
                      ? "text-blue-600 border-b-[3px] border-blue-600"
                      : "border-b-[3px] border-blue-600/0"
                  } transition-all cursor-pointer duration-150`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span>{tab}</span>
                </div>
              );
            })}
          </div>

          <Performance />
          <Sentiment />
          <AboutCoin
            coinName={currentCoin}
            coinDesc={coinDetails?.description?.en}
          />
          <Tokenomics />
          <Team />
        </div>
      )}
    </>
  );
}
