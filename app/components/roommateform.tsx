import { Dispatch, SetStateAction } from "react";

interface Props {
  setShowRoomateForm: Dispatch<SetStateAction<boolean>>;
}

export default function RoomateForm({ setShowRoomateForm }: Props) {
  return (
    <div className="fixed top-[50%] space-y-8 font-serenata translate-y-[-50%] shadow-2xl w-[70%] bg-white z-50 left-[50%] translate-x-[-50%] text-black px-16 py-10 ">
      <div className="">
        <h1 className="text-3xl font-kenyan text-brand_primary">
          Lets help you get the right roommate for you
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
          <label className="text-lg font-bold" htmlFor="gender">
            Gender
          </label>
          <select
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            name="gender"
            id="gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="hosting_or_searching">
            Hosting or Searching
          </label>
          <select
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            name="hosting_or_searching"
            id="hosting_or_searching"
          >
            <option value="hosting">Hosting</option>
            <option value="searching">Searching</option>
          </select>
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="roomate_gender">
            What roomate gender are you interested in?
          </label>
          <select
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            name="roomate_gender"
            id="roomate_gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-lg font-bold" htmlFor="roomate_number">
            How many roomates are you looking to find?
          </label>
          <input
            className="border-2 px-4 py-3 outline-brand_secondary/65"
            id="roomate_number"
            name="roomate_number"
            type="roomate_number"
            placeholder="Enter number"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={() => setShowRoomateForm(false)}
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
