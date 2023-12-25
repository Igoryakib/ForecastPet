import { handleGetUser } from "./apiGetUser";
import handleSearchProfile from "./apiSearchProfile";
import supabase from "./supabase";

export async function handleLogin(email, password, first_name) {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) console.log(error);
    if ((error + "").includes("Invalid login credentials")) return;
    return data?.user ? await handleGetUser() : null;
  } catch (error) {
    throw new Error("Couldn't sign in: " + error);
  }
}
// solyanicks@gmail.com
