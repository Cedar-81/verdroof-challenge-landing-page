import Logo from "./svgs/logo";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className=" px-10 h-max border-2 z-40 bg-black md:px-[50px] py-4 space-y-6 text-white flex flex-col md:flex-row justify-between items-center md:items-start">
      <div className="flex flex-col md:space-between md:space-y-2 items-center md:items-end">
        <h4 className="text-lg md:text-xl font-kenyan">
          There is a place for you at{" "}
        </h4>{" "}
        <Logo />
      </div>
      <h3 className="font-kenyan md:text-lg">
        ©2024 All Rights Reserved. Verdroof
      </h3>
      <div className="flex flex-col space-y-3 items-center md:items-start">
        <h5 className="font-serenata text-sm md:text-base text-center md:text-right">
          Do well to follow us on our social media handles
        </h5>
        <div className="flex space-x-3 items-center justify-between w-[10em]">
          <Facebook className="hover:cursor-pointer hover:text-brand_secondary" />
          <Instagram className="hover:cursor-pointer hover:text-brand_secondary" />
          <Twitter className="hover:cursor-pointer hover:text-brand_secondary" />
          <Linkedin className="hover:cursor-pointer hover:text-brand_secondary" />
        </div>
      </div>
    </div>
  );
}
