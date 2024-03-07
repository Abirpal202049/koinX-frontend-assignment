"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/coins/bitcoin");
  }, []);
  return <div className="container mx-auto px-4 text-5xl text-center font-thin py-10">KoinX</div>;
}
