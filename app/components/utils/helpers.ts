import { nanoid } from "nanoid";
import { supabase } from "./supabase/supabase";
import { format } from "date-fns";

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
  data?: string;
}

interface RefCodeData {
  lastname: string;
  firstname: string;
  point_sum: number;
}

interface RefPointsData {
  by_day: RefCodeData[];
  all_time: RefCodeData[];
}

export interface EmailFormData {
  email: string;
  ref_code: string;
  name: string;
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
    //console.log("Preorder inserted successfully:", data);
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

    //console.log("Waitlist inserted successfully:", data);
    if (ref_code.trim().length > 0) {
      await addReferral(ref_code);
    }

    await mailer({
      email: formData.email,
      ref_code: new_ref_code,
      name: `${formData.lastname} ${formData.firstname}`,
    });

    return {
      success: true,
      message: "Waitlist inserted successfully",
      data: new_ref_code,
    };
  } catch (error) {
    if ((error as Error).message.includes("duplicate key value")) {
      return {
        success: false,
        message: "Email or Mobile Number already exists.",
      };
    }
    // console.error("Error inserting waitlist:", (error as Error).message);
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
    //console.log("Roommate inserted successfully:", data);
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
    // console.log("Partner inserted successfully:", data);
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
      currentDate.getHours() > 24
    ) {
      // console.log(
      //   "Current date and time do not meet criteria. Referral not added."
      // );
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

    //console.log("Referral added successfully:", data);

    return {
      success: true,
      message: "Referral added successfully",
    };
  } catch (error) {
    console.error("Error adding referral:", (error as Error).message);
    return {
      success: false,
      message: "An error occurred in the backend. Please try again later.",
    };
  }
};

// const getReferralPoints = async (): Promise<RefCodeData[]> => {
//   try {
//     // Fetch waitlist data
//     const { data: waitlistData, error: waitlistError } = await supabase
//       .from("waitlist")
//       .select("ref_code");

//     if (waitlistError) {
//       throw waitlistError;
//     }

//     // Fetch referral data
//     const { data: referralData, error: referralError } = await supabase
//       .from("referrals")
//       .select(`ref_code (firstname, lastname, ref_code), points`)
//       .in(
//         "ref_code",
//         waitlistData.map((item) => item.ref_code)
//       );

//     if (referralError) {
//       throw referralError;
//     }

//     // Object to store ref_code and corresponding data
//     const refCodeDataMap: { [key: string]: RefCodeData } = {};

//     // Calculate total points for each ref_code
//     for (const { ref_code: code, points } of referralData) {
//       // @ts-ignore
//       const { firstname, lastname, ref_code } = code;
//       if (!refCodeDataMap[ref_code]) {
//         refCodeDataMap[ref_code] = {
//           lastname,
//           firstname,
//           point_sum: 0,
//         };
//       }
//       // Convert points to number and sum them up
//       refCodeDataMap[ref_code].point_sum += parseInt(points);
//     }

//     // Convert object to array of key-value pairs
//     const refCodeDataArray = Object.values(refCodeDataMap);

//     // Sort array based on total points in descending order
//     refCodeDataArray.sort((a, b) => b.point_sum - a.point_sum);

//     return refCodeDataArray;
//   } catch (error) {
//     console.error("Error calculating referral data:", error);
//     throw error;
//   }
// };

export const getReferralPoints = async (): Promise<RefPointsData> => {
  try {
    // Fetch waitlist data
    const { data: waitlistData, error: waitlistError } = await supabase
      .from("waitlist")
      .select("ref_code");

    if (waitlistError) {
      throw waitlistError;
    }

    // Fetch referral data
    const { data: referralData, error: referralError } = await supabase
      .from("referrals")
      .select(`ref_code (firstname, lastname, ref_code), points, day`)
      .in(
        "ref_code",
        waitlistData.map((item) => item.ref_code)
      );

    if (referralError) {
      throw referralError;
    }

    // Object to store ref_code and corresponding data
    const refCodeDataMapByDay: { [key: string]: RefCodeData } = {};
    const refCodeDataMapAllTime: { [key: string]: RefCodeData } = {};

    // Calculate total points for each ref_code
    const today = format(new Date(), "yyyy-MM-dd");
    for (const { ref_code: code, points, day } of referralData) {
      //@ts-ignore
      const { firstname, lastname, ref_code } = code;

      // Check if the day is today
      if (format(new Date(day), "yyyy-MM-dd") === today) {
        if (!refCodeDataMapByDay[ref_code]) {
          refCodeDataMapByDay[ref_code] = {
            lastname,
            firstname,
            point_sum: 0,
          };
        }
        // Convert points to number and sum them up
        refCodeDataMapByDay[ref_code].point_sum += parseInt(points);
      }
    }

    for (const { ref_code: code, points, day } of referralData) {
      //@ts-ignore
      const { firstname, lastname, ref_code } = code;
      if (!refCodeDataMapAllTime[ref_code]) {
        refCodeDataMapAllTime[ref_code] = {
          lastname,
          firstname,
          point_sum: 0,
        };
      }

      refCodeDataMapAllTime[ref_code].point_sum += parseInt(points);
    }

    // Convert object to array of key-value pairs
    const refCodeDataArrayByDay = Object.values(refCodeDataMapByDay);
    const refCodeDataArrayAllTime = Object.values(refCodeDataMapAllTime);

    // Sort array based on total points in descending order
    refCodeDataArrayByDay.sort((a, b) => b.point_sum - a.point_sum);

    return { by_day: refCodeDataArrayByDay, all_time: refCodeDataArrayAllTime };
  } catch (error) {
    console.error("Error calculating referral data:", error);
    throw error;
  }
};

export const mailer = async (formData: EmailFormData) => {
  console.log("in here", formData);
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to send message: " + (error as Error).message);
  }
};
