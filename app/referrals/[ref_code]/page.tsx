"use client";
import { useState } from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Banner from "@/app/components/banner";
import Navbar from "@/app/components/navbar";
import Offers from "@/app/components/offers";
import PartnerForm from "@/app/components/partnerform";
import PreorderForm from "@/app/components/preorderform";
import RoomateForm from "@/app/components/roommateform";
import WaitlistForm from "@/app/components/waitlistform";
import ReferralCode from "@/app/components/referralcode";
import Welcome from "@/app/components/welcome";

export default function Page({ params }: { params: { ref_code: string } }) {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showRoomateForm, setShowRoomateForm] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [showPreorderForm, setShowPreorderForm] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [showRefPopup, setshowRefPopup] = useState(false);
  const [referallCode, setReferallCode] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);

  const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT,
  };

  return (
    <Provider template={AlertTemplate} {...options}>
      <Navbar />
      <Banner
        setWaitlistEmail={setWaitlistEmail}
        waitlistEmail={waitlistEmail}
        setShowWaitlist={setShowWaitlist}
      />
      <Offers
        setShowRoomateForm={setShowRoomateForm}
        setShowPartnerForm={setShowPartnerForm}
        setShowPreorderForm={setShowPreorderForm}
      />
      {showWaitlist && (
        <WaitlistForm
          waitlistEmail={waitlistEmail}
          refCode={params.ref_code}
          setShowWaitlist={setShowWaitlist}
          setWaitlistEmail={setWaitlistEmail}
          setShowRefPopup={setshowRefPopup}
          setReferallCode={setReferallCode}
        />
      )}
      {showPreorderForm && (
        <PreorderForm setShowPreorderForm={setShowPreorderForm} />
      )}
      {showPartnerForm && (
        <PartnerForm setShowPartnerForm={setShowPartnerForm} />
      )}
      {showRoomateForm && (
        <RoomateForm setShowRoomateForm={setShowRoomateForm} />
      )}
      {showRefPopup && (
        <ReferralCode
          ref_code={referallCode as string}
          setShowRefPopup={setshowRefPopup}
        />
      )}
      {showWelcome && <Welcome setShowWelcome={setShowWelcome} />}
    </Provider>
  );
}
