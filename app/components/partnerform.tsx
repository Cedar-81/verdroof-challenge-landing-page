import { Dispatch, SetStateAction } from "react";

interface Props {
  setShowPartnerForm: Dispatch<SetStateAction<boolean>>;
}

export default function PartnerForm({ setShowPartnerForm }: Props) {
  return (
    <div className="fixed top-[50%] space-y-8 font-serenata translate-y-[-50%] shadow-2xl w-[70%] bg-white z-50 left-[50%] translate-x-[-50%] text-black px-16 py-10 ">
      <div className="">
        <h1 className="text-3xl font-kenyan text-brand_primary">
          Lets earn you some money while you help student like you find a place
          to stay
        </h1>
        <h2 className="text-lg font-bold">Lets get started...</h2>
      </div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
        {/* <h3 className="text-lg font-kenyan">Personal information</h3> */}
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="firstname">
            Firstname
          </label>
          <input
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            id="firstname"
            name="firstname"
            type="text"
            placeholder="Enter firstname"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="lastname">
            Lastname
          </label>
          <input
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Enter lastname"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="phonenumber">
            Phone/Whatsapp Number
          </label>
          <input
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            name="phonenumber"
            type="tel"
            placeholder="Enter phone/whatsapp number"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="lodge_name">
            Lodge name
          </label>
          <input
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            name="lodge_name"
            type="text"
            placeholder="Enter your lodge name"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="location">
            Lodge Location
          </label>
          <input
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            name="location"
            type="text"
            placeholder="Enter your lodging location"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="closest_landmark">
            Closest Landmark
          </label>
          <input
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            name="closest_landmark"
            type="text"
            placeholder="Enter your the closest landmark to you lodge"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="ios">
            Institution of Study
          </label>
          <select
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            name="ios"
            id="ios"
          >
            <option value="OAU">OAU</option>
            <option value="UNILAG">UNILAG</option>
            <option value="UNIBEN">UNIBEN</option>
          </select>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={() => setShowPartnerForm(false)}
          className="text-xl mr-4 relative font-kenyan px-8 text-brand_primary py-2 border-2 border-transparent hover:border-red-300"
        >
          Close
        </button>
        <button className="text-xl relative font-kenyan px-4 py-2 text-white bg-brand_primary">
          All done? Submit
        </button>
      </div>
    </div>
  );
}
