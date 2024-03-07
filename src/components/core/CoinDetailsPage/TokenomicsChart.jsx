"use client";
import React from 'react'
import ReactECharts from "echarts-for-react";
import { tokenomicsOption } from '@/data/Tokenomics';

export default function TokenomicsChart() {
  return (
    <div>
        <ReactECharts option={tokenomicsOption} />
    </div>
  )
}
