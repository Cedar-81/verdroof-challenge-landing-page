import { Dispatch, SetStateAction } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageSquareDot,
} from "lucide-react";

interface Props {
  setShowWelcome: Dispatch<SetStateAction<boolean>>;
}

export default function Welcome({ setShowWelcome }: Props) {
  return (
    <div className="fixed top-[50%] space-y-8 overflow-y-auto max-h-[90vh] font-serenata translate-y-[-50%] shadow-2xl w-[90%] md:w-[70%] bg-white z-50 left-[50%] translate-x-[-50%] text-black px-8 md:px-16 py-10 ">
      <h1 className="text-xl md:text-3xl font-kenyan text-brand_primary">
        Join the Ongoing Verdroof Challenge and stand a chance to win 2k daily?
      </h1>
      <div className="space-y-4">
        <h2 className="text-base md:text-xl font-kenyan">
          Follow these steps: 🫡
        </h2>
        <div className="flex flex-col space-y-8 text-lg font-serenata">
          <p>👉 Join our wait-list </p>
          <p>👉 Follow us on our social media handles </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
            <p>👉 Share your referral link on your social media platforms </p>
            <div className="flex space-x-3 items-center justify-between w-[10em]">
              <Facebook className="hover:cursor-pointer hover:text-brand_secondary h-4 md:h-10" />
              <Instagram className="hover:cursor-pointer hover:text-brand_secondary h-4 md:h-10" />
              <Twitter className="hover:cursor-pointer hover:text-brand_secondary h-4 md:h-10" />
              <Linkedin className="hover:cursor-pointer hover:text-brand_secondary h-4 md:h-10" />
            </div>
          </div>
          <p>👉 Refer friends and room-mates to share and engage </p>
          <div className="flex space-x-6 items-center">
            <p>👉 Join and engage on our WhatsApp community </p>
            <MessageSquareDot className="hover:cursor-pointer hover:text-brand_secondary h-4 md:h-10" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-8">
        <button
          type="submit"
          onClick={() => setShowWelcome(false)}
          className="md:text-xl relative font-kenyan px-4 py-2 text-white bg-brand_primary"
        >
          All done? Lets go!!!
        </button>
      </div>
    </div>
  );
}
