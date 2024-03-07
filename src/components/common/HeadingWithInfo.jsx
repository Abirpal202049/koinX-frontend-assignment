import React from "react";

export default function HeadingWithInfo({ title}) {
  return (
    <h2 className="flex items-center gap-1">
      <span className="font-medium">{title}</span>
      <div className="bg-gray-300 rounded-full flex items-center justify-center text-[10px] w-[15px] h-[15px] font-bold">
        i
      </div>
    </h2>
  );
}
