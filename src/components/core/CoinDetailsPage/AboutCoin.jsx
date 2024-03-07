import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AboutCoin({ coinName, coinDesc }) {
  return (
    <div className="bg-white rounded-lg overflow-auto p-4">
      <h1 className="text-xl font-medium">
        About
        <span className="capitalize"> {coinName}</span>{" "}
      </h1>

      <div className="my-3">
        <h2 className="text-lg font-bold">What is Bitcoin?</h2>
        <p className="border-b pb-4 text-sm my-1">
          Bitcoin is the first successful internet money based on peer-to-peer
          technology; whereby no central bank or authority is involved in the
          transaction and production of the Bitcoin currency. It was created by
          an anonymous individual/group under the name, Satoshi Nakamoto. The
          source code is available publicly as an open source project, anybody
          can look at it and be part of the developmental process.Bitcoin is
          changing the way we see money as we speak. The idea was to produce a
          means of exchange, independent of any central authority, that could be
          transferred electronically in a secure, verifiable and immutable way.
          It is a decentralized peer-to-peer internet currency making mobile
          payment easy, very low transaction fees, protects your identity, and
          it works anywhere all the time with no central authority and banks
        </p>
      </div>

      <div className="my-3">
        <h2 className="text-lg font-bold">Lorem ipsum dolor sit amet.</h2>
        <p className=" pb-4 text-sm my-1">
          Bitcoin is the first successful internet money based on peer-to-peer
          technology; whereby no central bank or authority is involved in the
          transaction and production of the Bitcoin currency. It was created by
          an anonymous individual/group under the name, Satoshi Nakamoto.{" "}
        </p>

        <p className="pb-4 text-sm my-1">
          The source code is available publicly as an open source project,
          anybody can look at it and be part of the developmental
          process.Bitcoin is changing the way we see money as we speak. The idea
          was to produce a means of exchange, independent of any central
          authority, that could be transferred electronically in a secure,
          verifiable and immutable way. It is a decentralized peer-to-peer
          internet currency making mobile payment easy, very low transaction
          fees, protects your identity, and it works anywhere all the time with
          no central authority and banks
        </p>

        <p className="border-b pb-4 text-sm my-1">
          Bitcoin is the first successful internet money based on peer-to-peer
          technology; whereby no central bank or authority is involved in the
          transaction and production of the Bitcoin currency. It was created by
          an anonymous individual/group under the name, Satoshi Nakamoto.{" "}
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-medium">Any Holding on Bitcoin?</h1>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-2 my-2 border-b pb-4">
          {/* Card 1 */}
          <div className="md:w-[50%] w-[100%] border p-2 rounded-lg flex items-center gap-x-5 bg-gradient-to-br from-cyan-500 to-blue-600">
            <Image src={"/card1.png"} width={128} height={128} alt="card1" />

            <div>
              <h1 className="text-2xl font-medium text-white text-balance w-[90%]">
                Calculate your profits
              </h1>
              <button className="flex items-center bg-white rounded text-sm px-2 py-1 my-2 gap-x-2 hover:scale-95 transition-all duration-150 font-medium">
                Check Now{" "}
                <span>
                  <MoveRight />
                </span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:w-[50%] w-[100%] border p-2 rounded-lg flex items-center gap-x-5 bg-gradient-to-br from-orange-500 to-red-500">
            <Image src={"/card2.png"} width={128} height={128} alt="card1" />

            <div>
              <h1 className="text-2xl font-medium text-white text-balance w-[90%]">
                Calculate your tax liability
              </h1>
              <button className="flex items-center bg-white rounded text-sm px-2 py-1 my-2 gap-x-2 hover:scale-95 transition-all duration-150 font-medium">
                Check Now{" "}
                <span>
                  <MoveRight />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm my-2 pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptates assumenda quia! Repudiandae molestiae ullam, nesciunt esse natus odio est. Nisi sapiente vero reiciendis fugiat delectus? Eligendi distinctio laboriosam nobis!
        </div>
      </div>
    </div>
  );
}
