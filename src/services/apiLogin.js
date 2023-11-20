import supabase from "./supabase";

export async function handleLogin(email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    console.error(error);
    throw new error("Couldn't sign up");
  }
  console.log(data);
  return data;
}
