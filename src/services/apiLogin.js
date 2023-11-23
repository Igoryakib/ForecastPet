import supabase from "./supabase";

export async function handleLogin(email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    // console.log(error);
    throw new Error("Couldn't sign up");
  }
  // console.log(data);
  return data;
}
