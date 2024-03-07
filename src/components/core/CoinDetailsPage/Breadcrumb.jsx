import { ChevronsRight } from "lucide-react";
import React from "react";

export default function Breadcrumb({ currentPageTitle }) {
  return (
    <div className="flex items-center gap-x-1">
      <span className="text-sm text-slate-500">Cryptocurrencies</span>
      <span className="text-slate-500">
        {" "}
        <ChevronsRight strokeWidth={1.5} size={20} />{" "}
      </span>
      <span className="capitalize text-sm text-black">
        {" "}
        {currentPageTitle}{" "}
      </span>
    </div>
  );
}
