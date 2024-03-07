"use client";
import React, { useEffect, useState } from "react";
import CoinsSlider from "./CoinsSlider";

export default function TrendingCoin() {
  const [coinsData, setCoinsData] = useState([]);

  const fetchTrendingCoins = async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
    const data = await res.json();
    setCoinsData(data.coins);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <div className="my-8">
      <div>
        <h1 className="text-xl font-medium"> You May Also Like</h1>
        <CoinsSlider coinDataArr={coinsData} />
      </div>

      <div className="my-8">
        <h1 className="text-xl font-medium"> Trending Coins</h1>
        <CoinsSlider coinDataArr={coinsData} />
      </div>
    </div>
  );
}