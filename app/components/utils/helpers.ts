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

export const insertPreorder = async (formData: PreorderFormData) => {
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
      throw (error as unknown) as Error; // Casting error to Error type
    }
    console.log("Preorder inserted:", data);
    return data;
  } catch (error) {
    console.error("Error inserting preorder:", (error as Error).message);
    throw error;
  }
};

export const insertWaitlist = async (formData: WaitlistFormData) => {
  try {
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
      },
    ]);
    if (error) {
      throw (error as unknown) as Error; // Casting error to Error type
    }
    console.log("Waitlist inserted:", data);
    return data;
  } catch (error) {
    console.error("Error inserting waitlist:", (error as Error).message);
    throw error;
  }
};

export const insertRoomate = async (formData: RoommateFormData) => {
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
      throw (error as unknown) as Error; // Casting error to Error type
    }
    console.log("Roommate inserted:", data);
    return data;
  } catch (error) {
    console.error("Error inserting roommate:", (error as Error).message);
    throw error;
  }
};

export const insertPartner = async (formData: PartnerFormData) => {
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
      throw (error as unknown) as Error; // Casting error to Error type
    }
    console.log("Partner inserted:", data);
    return data;
  } catch (error) {
    console.error("Error inserting partner:", (error as Error).message);
    throw error;
  }
};
