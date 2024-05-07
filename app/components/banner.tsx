import Image from "next/image";
import BannerSVG from "./svgs/bannersvg";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setShowWaitlist: Dispatch<SetStateAction<boolean>>;
  setWaitlistEmail: Dispatch<SetStateAction<string>>;
  waitlistEmail: string;
}

export default function Banner({
  setShowWaitlist,
  setWaitlistEmail,
  waitlistEmail,
}: Props) {
  return (
    <div className="h-[70vh] md:h-[60vh] text-white relative border-white overflow-clip">
      <Image
        src={"/assets/banner.png"}
        width="1512"
        height="588"
        alt="school campus"
        className="object-cover absolute h-full w-full"
      />
      <BannerSVG />
      <div className="relative z-20 md:w-[55%] px-10 md:mx-[50px] space-y-8 top-[50%] translate-y-[-50%]">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-kenyan">
            Bringing <span className="text-brand_accent">eco-friendly</span>{" "}
            accommodation to students, one space at a time
          </h1>
          <h2 className="text-sm md:text-lg font-serenata font-bold">
            We are on a mission to help Nigerian students find affordable
            accommodation by eliminating hassle and additional fees while
            pushing the boundaries of sustainable living.
          </h2>
        </div>
        <div className="flex h-14">
          <input
            className=" text-black px-4 text-sm xl:text-lg w-full outline-none"
            placeholder="Enter your email to join the waitlist and Verdroof Challenge"
            value={waitlistEmail}
            onChange={(e) => setWaitlistEmail(e.target.value)}
            type="text"
          />
          <button
            onClick={() => setShowWaitlist(true)}
            className="bg-brand_secondary h-full px-10 text-white font-kenyan md:text-2xl font-bold"
          >
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
}
