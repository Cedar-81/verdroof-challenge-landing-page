import Link from "next/link";
import Logo from "./svgs/logo";

export default function Navbar() {
  return (
    <div className="flex justify-between w-[100vw] z-40 px-10 bg-brand_primary md:px-[50px] items-center py-3 md:py-4 xl:fixed top-0 right-0">
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/leaderboard">
        <button className="text-xs md:text-xl font-kenyan px-4 py-2 text-brand_primary bg-brand_accent">
          CHALLENGE LEADEARBOARD
        </button>
      </Link>
    </div>
  );
}
