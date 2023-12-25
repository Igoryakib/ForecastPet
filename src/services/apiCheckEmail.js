import { handleGetUser } from "./apiGetUser";
import handleSearchProfile from "./apiSearchProfile";
import supabase from "./supabase";

const doesEmailExist = async (email) => {
  const { data: emails, error } = await supabase
    .from("profiles")
    .select("email");
  // const {authData, authError} = await supabase.auth.getUser();
  if (!handleSearchProfile(email)) return false;
  if (emails) {
    const emailExists = emails.some((i) => i.email === email);
    return emailExists;
  }
  if (error) {
    console.log("Error checking email:", error.message);
    return false;
  }
};

export default doesEmailExist;

//const doesEmailExist = async (email) => { const { data, error } = await supabase .from('auth.users') .select('email') if (error) { console.log('Error checking email:', error.message) return false } else { console.log('Email exists:', data) return data.length > 0 } } I always catch error block and get this messageError checking email: relation "public.auth.users" does not exist. auth.users table exists
