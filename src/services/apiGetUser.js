import supabase from "./supabase";

export async function handleGetUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // console.log(user ? "got user" : "didn't get user :( ")
  return user;
}
