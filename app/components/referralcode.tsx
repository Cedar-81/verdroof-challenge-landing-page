import { MessageSquareDot } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { useAlert } from "react-alert";

interface Props {
  setShowRefPopup: Dispatch<SetStateAction<boolean>>;
  ref_code: string;
}

export default function ReferralCode({ setShowRefPopup, ref_code }: Props) {
  const alert = useAlert();
  const copyToClipboard = async () => {
    try {
      // Copy the value of the input field to the clipboard
      await navigator.clipboard.writeText(
        `https://verdroof-challenge.vercel.app/referrals/${ref_code}`
      );
      // Optionally, you can show a success message here
      alert.success("Referral link copied to clipboard");
    } catch (error) {
      alert.error("Failed to copy referral link to clipboard");
      // Handle error if copying to clipboard fails
      // console.error("Failed to copy referral link to clipboard:", error);
    }
  };

  return (
    <div className="fixed top-[50%] space-y-8 overflow-y-auto max-h-[90vh] font-serenata translate-y-[-50%] shadow-2xl w-[90%] md:w-[60%] bg-white z-50 left-[50%] translate-x-[-50%] text-black px-8 md:px-16 py-10 ">
      <div className="space-y-4">
        <h1 className="text-xl md:text-3xl font-kenyan text-brand_primary">
          Here is your referral code
        </h1>

        <p className="text-sm md:text-base">
          👉 Share your referral link on your social media platforms and make
          sure join and engage in our WhatsApp community{" "}
          <a
            target="_blank"
            href="https://chat.whatsapp.com/EctCcLosA1X2rl0hMhPYWc"
          >
            <MessageSquareDot className="hover:cursor-pointer inline ml-2 hover:text-brand_secondary h-4 md:h-10" />
          </a>
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col space-y-8 text-lg font-serenata">
          <div className="flex h-14">
            <input
              className="text-black px-4 text-sm xl:text-lg w-[25rem] outline-none"
              placeholder={`https://verdroof-challenge.vercel.app/referrals/${ref_code}`}
              value={`https://verdroof-challenge.vercel.app/referrals/${ref_code}`}
              disabled
              type="text"
            />
            <button
              onClick={copyToClipboard} // Call the function when the button is clicked
              className="bg-brand_secondary h-full px-10 cursor-pointer text-white font-kenyan md:text-2xl font-bold"
            >
              COPY
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-8">
        <button
          type="submit"
          onClick={() => setShowRefPopup(false)}
          className="md:text-xl relative font-kenyan px-8 py-2 text-black border-2 border-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
