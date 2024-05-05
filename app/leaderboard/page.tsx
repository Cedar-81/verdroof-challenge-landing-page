"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import { getReferralPoints } from "../components/utils/helpers";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Footer from "../components/footer";

interface RefCodeData {
  lastname: string;
  firstname: string;
  point_sum: number;
}

interface RefPointsData {
  by_day: RefCodeData[];
  all_time: RefCodeData[];
}

export default function Leaderboard() {
  const [data, setData] = useState<RefPointsData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReferralPoints();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEEE, do MMMM, yyyy");
  return (
    <div className="h-full min-h-[100vh] w-full bg-gray-300 text-black">
      <Navbar />
      <Image
        src="/assets/texture.png"
        width="640"
        height="1088"
        alt="background texture"
        className="object-cover absolute h-full w-full mix-blend-multiply opacity-5"
      />
      <div className="w-[90%] md:w-[70%] mx-auto px-10 md:px-[50px] mt-20 flex flex-col md:flex-row justify-between items-center ">
        <h1 className="text-xl md:text-3xl font-kenyan">
          Here are the scores earned so far
        </h1>
        <h2 className="text-xs md:text-xl font-kenyan">
          Dated: {formattedDate}
        </h2>
      </div>
      <div className="w-full flex flex-col relative z-20 mt-10">
        {!data && (
          <div className="flex justify-between w-[70%] mx-auto px-6 py-4 border-b-2 border-b-black/25">
            <h1 className="text-xl font-kenyan">Loading...</h1>
          </div>
        )}
        {data &&
          data.by_day.map((data, index) => (
            <div
              key={index}
              className="flex justify-between w-full md:w-[70%] mx-auto px-6 py-1 md:py-4 border-b-2 border-b-black/25"
            >
              <h3 className="text-sm w-[90%] overflow-clip md:text-xl font-serenata">
                {data.firstname + data.lastname}
              </h3>
              <p className="text-lg font-kenyan">{data.point_sum}</p>
            </div>
          ))}
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
