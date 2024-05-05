import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setShowWaitlist: Dispatch<SetStateAction<boolean>>;
}

export default function WaitlistForm({ setShowWaitlist }: Props) {
  return (
    <div className="fixed top-[50%] space-y-8 font-serenata translate-y-[-50%] shadow-2xl w-[70%] bg-white z-50 left-[50%] translate-x-[-50%] text-black px-16 py-10 ">
      <div className="">
        <h1 className="text-3xl font-kenyan text-brand_primary">
          We need a tad more information... It won’t take long we promise
        </h1>
        <h2 className="text-lg font-bold">Lets get started...</h2>
      </div>

      <div className="grid grid-cols-2 space-x-10">
        <div className="space-y-4">
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
        </div>

        <div className="space-y-4">
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
            <label className="text-lg font-bold" htmlFor="level">
              Current Level
            </label>
            <input
              className="border-2 px-4 py-3 outline-brand_secondary/65"
              id="level"
              name="level"
              type="number"
              placeholder="Enter Level"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label className="text-lg font-bold" htmlFor="accommodation">
              Are you currently searching for accommodation?
            </label>
            <select
              className="border-2 px-4 py-3 outline-brand_secondary/65"
              name="accommodation"
              id="accommodation"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="space-y-2 flex flex-col">
            <label className="text-lg font-bold" htmlFor="budget">
              Whats your accommodation budget?
            </label>
            <select
              className="border-2 px-4 py-3 outline-brand_secondary/35"
              name="budget"
              id="budget"
            >
              <option value="<N120,000">{"<N120,000"}</option>
              <option value="N120,000 - N200,000">
                {"N120,000 - N200,000"}
              </option>
              <option value="N200,000 - N300,000">
                {"N200,000 - N300,000"}
              </option>
              <option value="N300,000 - N500,000">
                {"N300,000 - N500,000"}
              </option>
              <option value=">N500,000">{">N500,000"}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button
          onClick={() => setShowWaitlist(false)}
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
