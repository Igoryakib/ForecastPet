import supabase from "./supabase";

export async function handleLogin(email, password) {
  console.log("login attempted");
  try {
    let { data, _ } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log(data);

    return data?.user ? data : null;
  } catch (error) {
    throw new Error("Couldn't sign in: " + error);
  }
}
