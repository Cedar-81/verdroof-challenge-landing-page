"use client";
import { useState } from "react";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Offers from "./components/offers";
import WaitlistForm from "./components/waitlistform";
import RoomateForm from "./components/roommateform";
import PartnerForm from "./components/partnerform";
import PreorderForm from "./components/preorderform";

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showRoomateForm, setShowRoomateForm] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [showPreorderForm, setShowPreorderForm] = useState(false);
  return (
    <>
      <Navbar />
      <Banner setShowWaitlist={setShowWaitlist} />
      <Offers
        setShowRoomateForm={setShowRoomateForm}
        setShowPartnerForm={setShowPartnerForm}
        setShowPreorderForm={setShowPreorderForm}
      />
      {showWaitlist && <WaitlistForm setShowWaitlist={setShowWaitlist} />}
      {showPreorderForm && (
        <PreorderForm setShowPreorderForm={setShowPreorderForm} />
      )}
      {showPartnerForm && (
        <PartnerForm setShowPartnerForm={setShowPartnerForm} />
      )}
      {showRoomateForm && (
        <RoomateForm setShowRoomateForm={setShowRoomateForm} />
      )}
    </>
  );
}
