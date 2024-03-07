import React from "react";
// const fetchTrendingCoins = async () => {
//   const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
//   const data = await res.json();
//   setCoinsData(data.coins);
// };
export default function TrendingCoin() {
  // const [coinsData, setCoinsData] = useState([]);
  return <div>TrendingCoin</div>;
}

// <div>
//         <h1 className="text-3xl">Trending Coins</h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 py-3">
//           {coinsData?.map((coin) => (
//             <div
//               key={coin?.item?.id}
//               className="border border-slate-300 p-2 rounded-md flex flex-col justify-between overflow-hidden"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-x-2">
//                   <Image
//                     src={coin?.item?.thumb}
//                     width={25}
//                     height={25}
//                     alt={coin?.item?.symbol}
//                     className="rounded-full"
//                   />
//                   <h2 className="text-sm">{coin?.item?.symbol}</h2>
//                 </div>

//                 Percentage Difference in 24hr
//                 <span className="text-xs">
//                   {coin?.item?.data?.price_change_percentage_24h?.usd.toFixed(
//                     2
//                   )}
//                 </span>
//               </div>

//               Price
//               <div className="text-lg font-medium prose">
//                 {coin?.item?.data?.price.split(" ")}
//               </div>

//               <div>
//                 <Image src={coin?.item?.data?.sparkline} width={300} height={400} className=" px-2 mt-2" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
