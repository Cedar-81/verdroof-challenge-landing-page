import { nanoid } from "nanoid";
import { supabase } from "./supabase/supabase";

interface PreorderFormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  budget: string;
  ios: string;
}

interface WaitlistFormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  gender: string;
  budget: string;
  level: number;
  ios: string;
  accommodation: string;
}

interface RoommateFormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  gender: string;
  roomate_gender: string;
  roomate_number: number;
  ios: string;
  hosting_or_searching: string;
}

interface PartnerFormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  ios: string;
  location: string;
  lodge_name: string;
  closest_landmark: string;
}

interface ReferralData {
  day: string; // assuming you want to store the date as a string
  ref_code: string;
  points: number;
}

interface OperationResult {
  success: boolean;
  message: string;
}

export const insertPreorder = async (
  formData: PreorderFormData
): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase.from("preorders").insert([
      {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        mobile_no: formData.phonenumber,
        budget: formData.budget,
        institution_of_study: formData.ios,
      },
    ]);
    if (error) {
      throw error;
    }
    console.log("Preorder inserted successfully:", data);
    return { success: true, message: "Preorder inserted successfully" };
  } catch (error) {
    if ((error as Error).message.includes("duplicate key value")) {
      return {
        success: false,
        message: "Email or Mobile Number already exists.",
      };
    }
    console.error("Error inserting preorder:", (error as Error).message);
    return {
      success: false,
      message: "An error occurred in the backend. Please try again later.",
    };
  }
};

export const insertWaitlist = async (
  formData: WaitlistFormData,
  ref_code: string
): Promise<OperationResult> => {
  try {
    const new_ref_code = nanoid(8);
    const { data, error } = await supabase.from("waitlist").insert([
      {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        mobile_no: formData.phonenumber,
        gender: formData.gender,
        budget: formData.budget,
        level: formData.level,
        institution_of_study: formData.ios,
        accommodation: formData.accommodation,
        ref_code: new_ref_code,
      },
    ]);
    if (error) {
      throw error;
    }
    console.log("Waitlist inserted successfully:", data);
    if (ref_code.trim().length > 0) {
      await addReferral(ref_code);
    }
    return { success: true, message: "Waitlist inserted successfully" };
  } catch (error) {
    if ((error as Error).message.includes("duplicate key value")) {
      return {
        success: false,
        message: "Email or Mobile Number already exists.",
      };
    }
    console.error("Error inserting waitlist:", (error as Error).message);
    return {
      success: false,
      message: "An error occurred in the backend. Please try again later.",
    };
  }
};

export const insertRoomate = async (
  formData: RoommateFormData
): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase.from("roommates").insert([
      {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        mobile_no: formData.phonenumber,
        gender: formData.gender,
        roommate_gender: formData.roomate_gender,
        roommate_number: formData.roomate_number,
        institution_of_study: formData.ios,
        hosting: formData.hosting_or_searching === "hosting",
      },
    ]);
    if (error) {
      throw error;
    }
    console.log("Roommate inserted successfully:", data);
    return { success: true, message: "Roommate inserted successfully" };
  } catch (error) {
    if ((error as Error).message.includes("duplicate key value")) {
      return {
        success: false,
        message: "Email or Mobile Number already exists.",
      };
    }
    console.error("Error inserting roommate:", (error as Error).message);
    return {
      success: false,
      message: "An error occurred in the backend. Please try again later.",
    };
  }
};

export const insertPartner = async (
  formData: PartnerFormData
): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase.from("partners").insert([
      {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        mobile_no: formData.phonenumber,
        institution_of_study: formData.ios,
        location: formData.location,
        lodge_name: formData.lodge_name,
        closest_landmark: formData.closest_landmark,
      },
    ]);
    if (error) {
      throw error;
    }
    console.log("Partner inserted successfully:", data);
    return { success: true, message: "Partner inserted successfully" };
  } catch (error) {
    if ((error as Error).message.includes("duplicate key value")) {
      return {
        success: false,
        message: "Email or Mobile Number already exists.",
      };
    }
    console.error("Error inserting partner:", (error as Error).message);
    return {
      success: false,
      message: "An error occurred in the backend. Please try again later.",
    };
  }
};

export const addReferral = async (
  ref_code: string
): Promise<OperationResult> => {
  try {
    // Check if the current date and time meet the specified criteria
    const currentDate = new Date();
    const startDate = new Date("2024-05-05T05:00:00");
    const endDate = new Date("2024-05-26T21:00:00");
    if (
      currentDate < startDate ||
      currentDate > endDate ||
      currentDate.getHours() < 5 ||
      currentDate.getHours() > 21
    ) {
      console.log(
        "Current date and time do not meet criteria. Referral not added."
      );
      return {
        success: false,
        message:
          "Referral not added. Current date and time do not meet criteria.",
      };
    }

    // Construct the referral data object
    const referralData: ReferralData = {
      day: currentDate.toISOString(),
      ref_code,
      points: 10,
    };

    // Insert the referral data into the Supabase table
    const { data, error } = await supabase
      .from("referrals")
      .insert([referralData]);
    if (error) {
      throw error;
    }

    console.log("Referral added successfully:", data);
    return { success: true, message: "Referral added successfully" };
  } catch (error) {
    console.error("Error adding referral:", (error as Error).message);
    return {
      success: false,
      message: "An error occurred in the backend. Please try again later.",
    };
  }
};
