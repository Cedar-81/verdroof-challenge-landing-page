import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Footer from "./footer";

interface Props {
  setShowRoomateForm: Dispatch<SetStateAction<boolean>>;
  setShowPartnerForm: Dispatch<SetStateAction<boolean>>;
  setShowPreorderForm: Dispatch<SetStateAction<boolean>>;
}

export default function Offers({
  setShowRoomateForm,
  setShowPartnerForm,
  setShowPreorderForm,
}: Props) {
  return (
    <div className="h-[40vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 static">
        <div className="h-full relative">
          <Image
            src="/assets/roomate_bkg.png"
            width="504"
            height="394"
            alt="background pattern"
            className="object-cover absolute h-full w-full"
          />
          <div className="relative z-10 text-black p-[32px] space-y-4 h-full w-full bg-white/70">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-4xl font-kenyan text-brand_primary">
                Find a roommate
              </h3>
              <p className="text-sm md:text-lg font-serenata">
                Finding a roommate is hard but we&apos;ve come up with an
                algorithm to help you find the best roommate for you.
              </p>
            </div>
            <button
              onClick={() => setShowRoomateForm(true)}
              className="md:text-lg font-kenyan bg-brand_accent text-white px-5 py-3"
            >
              TRY IT OUT
            </button>
          </div>
        </div>
        <div className="h-full text-white relative bg-brand_primary">
          <div className="relative z-10 p-[32px] space-y-4 h-full w-full">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-4xl font-kenyan">
                Join our mission to save the planet
              </h3>
              <p className="text-sm md:text-lg font-serenata">
                Preorder our solar-kit and stand a chance to save the planet and
                earn some Verdroof points.
              </p>
            </div>
            <button
              onClick={() => setShowPreorderForm(true)}
              className="md:text-lg font-kenyan bg-brand_accent text-white px-5 py-3"
            >
              TRY IT OUT
            </button>
          </div>
        </div>
        <div className="h-full relative">
          <Image
            src="/assets/partner_bkg.png"
            width="504"
            height="394"
            alt="background pattern"
            className="object-cover absolute h-full w-full"
          />
          <div className="relative z-10 text-black p-[32px] space-y-4 h-full w-full bg-white/70">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-4xl font-kenyan text-brand_secondary">
                Become a partner
              </h3>
              <p className="text-sm md:text-lg font-serenata">
                Join other students across Nigeria to earn extra cash. All you
                need to do is become a partner and you&apos;re set.
              </p>
            </div>
            <button
              onClick={() => setShowPartnerForm(true)}
              className="md:text-lg font-kenyan bg-brand_accent text-white px-5 py-3"
            >
              TRY IT OUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
