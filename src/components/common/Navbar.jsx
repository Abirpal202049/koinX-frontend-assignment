"use client";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navOptions = [
  { id: 1, name: "Crypto Taxes", link: "/" },
  { id: 2, name: "Free Tools", link: "/" },
  { id: 3, name: "Resource Center", link: "/" },
];

export default function Navbar() {
  const [toggleMobileNavBar, setToggleMobileNavBar] = useState(false);
  return (
    <div className="bg-white border-b border-slate-300">
      <div className="container mx-auto py-4 flex items-center px-5 md:px-2">
        <div className="flex-1">
          <Link href={"/"}>
            <Image src={"/koinx.svg"} width={100} height={50} />
          </Link>
        </div>

        {/* Nav  Options */}
        <div className="md:flex items-center gap-x-8 hidden">
          <ul className="flex gap-5">
            {navOptions?.map((option) => {
              return (
                <li key={option.id}>
                  <Link href={option.link}>
                    <p className="font-medium hover:text-blue-600 transition-all duration-150">
                      {option.name}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>

          <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-5 py-2 text-white rounded-md font-medium hover:scale-95 transition-all duration-150">
            Get Started
          </button>
        </div>

        <div
          className="md:hidden flex cursor-pointer hover:scale-110 transition-all duration-200"
          onClick={() => setToggleMobileNavBar(!toggleMobileNavBar)}
        >
          <AlignJustify strokeWidth={2} size={25} />
        </div>

        {/* Mobile Nav */}
      </div>

      <div
        className={`p-4 md:hidden flex-col gap-y-2 ${
          toggleMobileNavBar ? "flex" : "hidden h-0"
        } transition-all duration-200`}
      >
        <ul className="flex flex-col gap-y-2 -mt-4">
          {navOptions?.map((option) => {
            return (
              <li key={option.id}>
                <Link href={option.link}>
                  <p
                    onClick={() => setToggleMobileNavBar(false)}
                    className="font-medium hover:text-blue-600 transition-all duration-200"
                  >
                    {option.name}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-5 py-2 text-white rounded-md font-medium hover:scale-95 transition-all duration-150">
          Get Started
        </button>
      </div>
    </div>
  );
}
