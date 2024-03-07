import HeadingWithInfo from "@/components/common/HeadingWithInfo";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Coins,
  Home,
  Newspaper,
  TreePine,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const keyEventCard = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: <Newspaper size={20} />,
    color: "bg-blue-500",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: <TrendingUp size={20} />,
    color: "bg-green-500",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: <TreePine size={20} />,
    color: "bg-red-500",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: <Home size={20} />,
    color: "bg-orange-500",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: <Coins size={20} />,
    color: "bg-violet-500",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: <TrendingDown size={20} />,
    color: "bg-pink-500",
  },
];

export default function Sentiment() {
  return (
    <div className="bg-white rounded-lg overflow-auto p-4">
      <h1 className="text-xl font-medium">Sentiment</h1>
      <div className="my-4">
        <HeadingWithInfo title={"Key Events"} />
        <div className="">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full my-3"
          >
            <div className="relative">
              <div className="absolute right-14 top-[50%]">
                <CarouselNext
                  title="Next"
                  className="bg-white z-50 shadow text-slate-600"
                />
              </div>
              <CarouselContent>
                {keyEventCard?.map((card, index) => (
                  <CarouselItem key={index} className="basis md:basis-1/2">
                    <div
                      className={cn("p-5 rounded-lg bg-opacity-10", card.color)}
                    >
                      <div className="flex items-start text-sm gap-x-2 ">
                        <div
                          className={cn(
                            "w-fit text-white p-3 rounded-full",
                            card.color
                          )}
                        >
                          {card.icon}
                        </div>

                        <div className="flex flex-col gap-y-2">
                          <h2 className="font-medium">{card.title}</h2>
                          <p className="text-slate-500">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="my-8">
        <HeadingWithInfo title={"Analyst Estimates"} />
        <div className="my-5 flex items-center gap-x-5">
          {/* Chart */}
          <div className="md:w-40 w-28 md:h-40 h-28 bg-green-100 rounded-full flex items-center justify-center text-3xl md:text-5xl font-medium text-green-600">
            76%
          </div>

          {/* Percent */}
          <section className="flex-1 text-sm text-slate-500 flex flex-col gap-y-3">
            <div className="flex items-center gap-x-2">
              <span className="w-10">Buy</span>
              <div className="h-[10px] bg-green-500 w-[76%] rounded-sm"></div>
              <span>76%</span>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="w-10">Hold</span>
              <div className="h-[10px] bg-slate-400 w-[8%] rounded-sm"></div>
              <span>8%</span>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="w-10">Sell</span>
              <div className="h-[10px] bg-red-500 w-[16%] rounded-sm"></div>
              <span>16%</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
