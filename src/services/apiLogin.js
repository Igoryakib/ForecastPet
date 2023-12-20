import supabase from "./supabase";

export async function handleLogin(email, password) {
  console.log("login attempted");
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log(data);
    if (error) console.log(error);
    if ((error + "").includes("Invalid login credentials")) return;

    return data?.user ? data : null;
  } catch (error) {
    throw new Error("Couldn't sign in: " + error);
  }
}
// solyanicks@gmail.com
