import supabase from "./supabase";

export async function handleSignout() {
  let {data, error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
    throw new Error("Couldn't sign up");
  }
  return data;
}