import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import TrendingCoin from "@/components/common/TrendingCoin";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KoinX",
  description:
    "KoinX is known for their impeccable crypto tax calculations and portfolio management solution",
};

export default function RootLayout({ children, children2 }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          <div className=" bg-gray-200/60">
            <div className="container mx-auto py-4 px-4 md:px-2">
              {children}
            </div>
          </div>

          <div>
            <div className="container mx-auto py-4 px-4 md:px-2">
              <TrendingCoin />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
