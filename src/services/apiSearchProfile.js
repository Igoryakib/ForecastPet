import supabase from "./supabase";

const handleSearchProfile = async function (email) {
  try {
    const { data: profiles, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", email);
    return profiles;
  } catch (error) {
    console.error(error.message);
  }
};

export default handleSearchProfile;
