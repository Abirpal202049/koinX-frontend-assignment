import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function GettingStarted() {
  return (
    <div className=" bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] rounded-2xl p-4 text-white flex items-center justify-center flex-col gap-4 py-7">
      {/* Coin Price and Graph */}
      <h2 className="text-2xl font-medium text-balance text-center w-[80%]">
        Get started with KoinX for FREE
      </h2>

      <p className="text-center text-sm w-[80%] text-balance">
        {" "}
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>

      <Image src={"/Frame.png"} height={250} width={250} />

      <button className="flex items-center bg-white text-black rounded text-sm px-5 py-2 my-2 gap-x-2 hover:scale-95 transition-all duration-150 font-medium ">
        Get Started for FREE{" "}
        <span>
          <MoveRight />
        </span>
      </button>
    </div>
  );
}
