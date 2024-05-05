import Logo from "./svgs/logo";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className=" px-10 md:px-[50px] py-4 text-white flex justify-between items-center">
      <div className="flex flex-col space-between space-y-2 items-end">
        <h4 className="text-xl font-kenyan">There is a place for you at </h4>{" "}
        <Logo />
      </div>
      <h3 className="font-kenyan text-lg">
        ©2024 All Rights Reserved. Verdroof
      </h3>
      <div className="flex flex-col space-y-3">
        <h5 className="font-serenata">
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
