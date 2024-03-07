import React from "react";
import Breadcrumb from "@/components/core/CoinDetailsPage/Breadcrumb";
import CoinInfo from "@/components/core/CoinDetailsPage/CoinInfo";
import TrendingSection from "@/components/core/CoinDetailsPage/TrendingSection";

export default function CoinDetails({ params }) {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb currentPageTitle={params.id} />

      {/* Content */}
      <div className="flex flex-col lg:flex-row py-3 gap-5">
        {/* Coin Price amd Graph and Other Details */}
        <CoinInfo currentCoin={params.id} />

        {/* Ads and Trending */}
        <TrendingSection />
      </div>
    </>
  );
}
