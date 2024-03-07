import HeadingWithInfo from "@/components/common/HeadingWithInfo";
import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const FundamentalData = [
  {
    title: "Price",
    value: "$48,637.83",
  },
  {
    title: "24h Low / 24h High",
    value: "$16,382.07 / $16,874.12",
  },
  {
    title: "7d Low / 7d High",
    value: "$16,382.07 / $16,874.12",
  },
  {
    title: "Trading Volume",
    value: "$23,249,202,782",
  },
  {
    title: "Market Cap Rank",
    value: "#1",
  },
  {
    title: "Market Cap",
    value: "$323,507,290,047",
  },
  {
    title: "Market Cap Dominance",
    value: "38.343%",
  },
  {
    title: "Volume / Market Cap",
    value: "0.0718",
  },
  {
    title: "All-Time High",
    value: "$69,044.77 ",
    subValue: -75.6,
    desc: "Nov 10, 2021 (about 1 year)",
  },
  {
    title: "All-Time Low",
    value: "$67.81 ",
    subValue: 24729.1,
    desc: "Jul 06, 2013 (over 9 years)",
  },
];

export default function Performance() {
  return (
    <div className="bg-white rounded-lg overflow-auto p-4">
      <h1 className="text-xl font-medium">Performance</h1>

      {/* low and High Bar */}
      <div className="flex flex-col my-5">
        <div className="flex justify-between items-center gap-5 my-3 relative">
          {/* Low */}
          <div className="flex flex-col text-sm text-slate-700">
            <span className="text-xs text-slate-500">Today&apos;s Low</span>
            <span>46,930.22</span>
          </div>

          {/* Performance Bar */}
          <div className="h-[5px] rounded-full flex-1  bg-gradient-to-r from-red-600 via-orange-400  to-green-500"></div>

          <div className="absolute -bottom-[9px] right-40 flex flex-col text-xs items-center text-slate-600">
            <TiArrowSortedUp />
            <span>$48,637.83</span>
          </div>

          {/* High */}
          <div className="flex flex-col text-sm text-right text-slate-700">
            <span className="text-xs text-slate-500">Today&apos;s Low</span>
            <span>46,930.22</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 my-3">
          {/* Low */}
          <div className="flex flex-col text-sm text-slate-700">
            <span className="text-xs text-slate-500">Today&apos;s Low</span>
            <span>46,930.22</span>
          </div>

          {/* Performance Bar */}
          <div className="h-[5px] rounded-full flex-1  bg-gradient-to-r from-red-600 via-orange-400  to-green-500"></div>

          {/* High */}
          <div className="flex flex-col text-sm text-right text-slate-700">
            <span className="text-xs text-slate-500">Today&apos;s Low</span>
            <span>46,930.22</span>
          </div>
        </div>
      </div>

      <HeadingWithInfo title={"Fundamentals"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 my-3">
        {FundamentalData.map((data, index) => {
          return (
            <div key={index} className="flex justify-between items-center h-[55px] border-b text-sm">
              <p className="text-slate-400">{data.title}</p>
              <p className="text-right flex flex-col ">
                <span className="flex flex-row text-right justify-end gap-x-2">
                  {data.value}{" "}
                  {data.subValue && (
                    <span
                      className={`${
                        data?.subValue > 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {data?.subValue}%
                    </span>
                  )}
                </span>
                <span className="text-xs font-extralight">{data?.desc}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
