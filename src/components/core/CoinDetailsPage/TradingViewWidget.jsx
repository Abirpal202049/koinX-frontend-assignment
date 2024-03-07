// TradingViewWidget.jsx
"use client";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "W",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    // return () => {
    //   container.current.appendChild(script);
    // }
  }, []);
  // w-[calc(100vw-70px)] sm:w-[560px] md:w-[710px] lg:w-[650px] xl:w-[830px] 2xl:w-[900px]
  return (
    <div className="overflow-hidden w-[calc(100vw-70px)] lg:w-[670px] xl:w-[850px] 2xl:w-[920px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
