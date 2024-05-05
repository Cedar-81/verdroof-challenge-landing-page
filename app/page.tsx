"use client";
import { useState } from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Offers from "./components/offers";
import WaitlistForm from "./components/waitlistform";
import RoomateForm from "./components/roommateform";
import PartnerForm from "./components/partnerform";
import PreorderForm from "./components/preorderform";
import Footer from "./components/footer";

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showRoomateForm, setShowRoomateForm] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [showPreorderForm, setShowPreorderForm] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");

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
          refCode=""
          setShowWaitlist={setShowWaitlist}
          setWaitlistEmail={setWaitlistEmail}
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
    </Provider>
  );
}
