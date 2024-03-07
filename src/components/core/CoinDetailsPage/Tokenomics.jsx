import React from "react";
import TokenomicsChart from "./TokenomicsChart";

export default function Tokenomics() {
  return (
    <div className="bg-white rounded-lg overflow-auto p-4">
      <h1 className="text-xl font-medium my-4">Tokenomics</h1>

      <div className="flex flex-col md:flex-row items-center -mt-10 mb-5 md:mb-0">
        <div className="md:w-[30%] w-[100%]">
          <TokenomicsChart />
        </div>
        <div className="flex flex-col gap-4 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <p className="h-4 w-4 bg-[#0082FF] rounded-full"></p>Crowdsale
            investors : 80%
          </div>
          <div className="flex items-center gap-2">
            <p className="h-4 w-4 bg-[#FAA002] rounded-full"></p>Foundation :
            20%
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold">Initial Distribution</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
        minus nisi commodi nihil, asperiores ea dolores eveniet ipsum, saepe
        rerum aspernatur obcaecati explicabo. Nobis, sit quam rem excepturi
        dicta, at quae repellat illum autem quo, reprehenderit voluptate
        accusantium repudiandae tenetur architecto hic. Doloremque qui dolorum
        labore nobis impedit, rem maxime maiores eum amet quo facere nesciunt
        tempore debitis laudantium sequi! Commodi cumque tempore quidem. Fugiat
        vero temporibus vitae molestias. Deserunt aperiam quia officiis eum
        obcaecati rem reprehenderit, hic facere architecto laboriosam reiciendis
        corrupti iure numquam! Nam, nobis quasi hic similique delectus dicta
        dolorum. Velit ad ratione accusamus veniam aut perferendis!
      </p>
    </div>
  );
}
