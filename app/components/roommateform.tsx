import { Dispatch, SetStateAction, useState } from "react";
import { insertRoomate } from "./utils/helpers";

interface Props {
  setShowRoomateForm: Dispatch<SetStateAction<boolean>>;
}

export default function RoomateForm({ setShowRoomateForm }: Props) {
  // Initialize state for form data and field errors
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "male", // Default value for Gender
    phonenumber: "",
    ios: "OAU", // Default value for Institution of Study
    hosting_or_searching: "hosting", // Default value for Hosting or Searching
    roomate_gender: "male", // Default value for Roommate Gender
    roomate_number: 1, // Default value for Roommate Number
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle input change and update form data state
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Clear the error message if the field is filled
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Validate the form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    // Check if any field is empty
    Object.entries(formData).forEach(([key, value]) => {
      if (
        key !== "roomate_number" &&
        typeof value === "string" &&
        value.trim() === ""
      ) {
        newErrors[key] = "This field is required";
      }
    });
    // Perform additional validation if needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email as string)) {
      newErrors.email = "Please enter a valid email address";
    }
    // Set errors state with the new errors
    setErrors(newErrors);
    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the form before submitting
    if (validateForm()) {
      console.log("Form data:", formData);
      await insertRoomate(formData);
      // You can perform further actions such as sending data to the backend here
    } else {
      console.log("Form validation failed. Please check the fields.");
    }
  };

  return (
    <div className="fixed top-[50%] space-y-8 overflow-y-auto max-h-[80vh] font-serenata translate-y-[-50%] shadow-2xl w-[90%] md:w-[70%] bg-white z-50 left-[50%] translate-x-[-50%] text-black px-8 md:px-16 py-10 ">
      <div className="">
        <h1 className="text-xl md:text-3xl font-kenyan text-brand_primary">
          Let's help you get the right roommate for you
        </h1>
        <h2 className="text-sm md:text-lg font-bold">Let's get started...</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          <div className="space-y-2 flex flex-col">
            <label className="text-sm md:text-lg font-bold" htmlFor="firstname">
              Firstname
            </label>
            <input
              className={`border-2 px-4 py-3 outline-brand_secondary/65 ${
                errors.firstname ? "border-red-500" : ""
              }`}
              id="firstname"
              name="firstname"
              type="text"
              value={formData.firstname}
              onChange={handleInputChange}
            />
            {errors.firstname && (
              <p className="text-red-500">{errors.firstname}</p>
            )}
          </div>
          <div className="space-y-2 flex flex-col">
            <label className="text-sm md:text-lg font-bold" htmlFor="lastname">
              Lastname
            </label>
            <input
              className={`border-2 px-4 py-3 outline-brand_secondary/65 ${
                errors.lastname ? "border-red-500" : ""
              }`}
              id="lastname"
              name="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}
            />
            {errors.lastname && (
              <p className="text-red-500">{errors.lastname}</p>
            )}
          </div>
          <div className="space-y-2 flex flex-col">
            <label className="text-sm md:text-lg font-bold" htmlFor="email">
              Email
            </label>
            <input
              className={`border-2 px-4 py-3 outline-brand_secondary/65 ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="space-y-2 flex flex-col">
            <label className="text-sm md:text-lg font-bold" htmlFor="gender">
              Gender
            </label>
            <select
              className={`border-2 px-4 py-3 outline-brand_secondary/65 ${
                errors.gender ? "border-red-500" : ""
              }`}
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>
          <div className="space-y-2 flex flex-col">
            <label
              className="text-sm md:text-lg font-bold"
              htmlFor="phonenumber"
            >
              Phone/Whatsapp Number
            </label>
            <input
              className={`border-2 px-4 py-3 outline-brand_secondary/65 ${
                errors.phonenumber ? "border-red-500" : ""
              }`}
              name="phonenumber"
              type="tel"
              value={formData.phonenumber}
              onChange={handleInputChange}
            />
            {errors.phonenumber && (
              <p className="text-red-500">{errors.phonenumber}</p>
            )}
          </div>

          <div className="space-y-2 flex flex-col">
            <label className="text-sm md:text-lg font-bold" htmlFor="ios">
              Institution of Study
            </label>
            <select
              className={`border-2 px-4 py-3 outline-brand_secondary/65 ${
                errors.ios ? "border-red-500" : ""
              }`}
              name="ios"
              id="ios"
              value={formData.ios}
              onChange={handleInputChange}
            >
              <option value="OAU">OAU</option>
              <option value="UNILAG">UNILAG</option>
              <option value="UNIBEN">UNIBEN</option>
            </select>
            {errors.ios && <p className="text-red-500">{errors.ios}</p>}
          </div>
          <div className="space-y-2 flex flex-col">
            <label
              className="text-sm md:text-lg font-bold"
              htmlFor="hosting_or_searching"
            >
              Hosting or Searching
            </label>
            <select
              className={`border-2 px-4 py-3 outline-brand_secondary/65 ${
                errors.hosting_or_searching ? "border-red-500" : ""
              }`}
              name="hosting_or_searching"
              id="hosting_or_searching"
              value={formData.hosting_or_searching}
              onChange={handleInputChange}
            >
              <option value="hosting">Hosting</option>
              <option value="searching">Searching</option>
            </select>
            {errors.hosting_or_searching && (
              <p className="text-red-500">{errors.hosting_or_searching}</p>
            )}
          </div>
          <div className="space-y-2 flex flex-col">
            <label
              className="text-sm md:text-lg font-bold"
              htmlFor="roomate_gender"
            >
              What roommate gender are you interested in?
            </label>
            <select
              className={`border-2 px-4 py-3 outline-brand_secondary/65 ${
                errors.roomate_gender ? "border-red-500" : ""
              }`}
              name="roomate_gender"
              id="roomate_gender"
              value={formData.roomate_gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.roomate_gender && (
              <p className="text-red-500">{errors.roomate_gender}</p>
            )}
          </div>
          <div className="space-y-2 flex flex-col">
            <label
              className="text-sm md:text-lg font-bold"
              htmlFor="roomate_number"
            >
              How many roommates are you looking to find?
            </label>
            <input
              className={`border-2 px-4 py-3 outline-brand_secondary/65 ${
                errors.roomate_number ? "border-red-500" : ""
              }`}
              id="roomate_number"
              name="roomate_number"
              type="number"
              value={formData.roomate_number}
              onChange={handleInputChange}
            />
            {errors.roomate_number && (
              <p className="text-red-500">{errors.roomate_number}</p>
            )}
          </div>
        </div>

        <div className="w-full flex justify-end mt-8">
          <button
            onClick={() => setShowRoomateForm(false)}
            className="md:text-xl mr-4 relative font-kenyan px-8 text-brand_primary py-2 border-2 border-transparent hover:border-red-300"
          >
            Close
          </button>
          <button
            type="submit"
            className="md:text-xl relative font-kenyan px-4 py-2 text-white bg-brand_primary"
          >
            All done? Submit
          </button>
        </div>
      </form>
    </div>
  );
}
