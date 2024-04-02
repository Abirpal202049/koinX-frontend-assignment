import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";


export default function CoinsSlider({coinDataArr}) {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full my-3"
      >
        <div className="relative ">
          <div className="absolute right-8 top-[50%]">
            <CarouselNext
              title="Next"
              className="bg-white z-50 shadow text-slate-600"
            />
          </div>

          <div className="absolute left-8 top-[50%]">
            <CarouselPrevious
              title="Next"
              className="bg-white z-50 shadow text-slate-600"
            />
          </div>
          <CarouselContent>
            {coinDataArr?.map((coin, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div
              key={coin?.item?.id}
              className="border h-[170px] border-slate-300 p-2 rounded-md flex flex-col justify-between overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Image
                    src={coin?.item?.thumb}
                    width={25}
                    height={25}
                    alt={coin?.item?.symbol}
                    className="rounded-full"
                  />
                  <h2 className="text-sm">{coin?.item?.symbol}</h2>
                </div>

                <span className={`text-xs ${
                    coin?.item?.data?.price_change_percentage_24h?.usd > 0
                      ? "text-green-600 bg-green-100"
                      : "text-red-500 bg-red-100"
                  } p-1 rounded`}>
                  {`${coin?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                    2
                  )} %`}
                </span>
              </div>

              <div className="text-lg font-medium prose">
                {coin?.item?.data?.price?.split(" ")}
              </div>

              <div className="">
                <Image src={coin?.item?.data?.sparkline} width={300} height={160} className=" px-2 pb-2 mt-2" />
              </div>
            </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
