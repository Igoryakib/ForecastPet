import handleSearchProfile from "./apiSearchProfile";
import supabase from "./supabase";

export async function handleSignUp(email, password, name) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: name,
        },
      },
      // options: {},
    });
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .insert([
        {
          id: data.user.id,
          first_name: name,
          created_at: data.user.created_at,
          id_avatar: 1,
          email: data.user.email,
        },
      ])
      .select();
    return profileData;
  } catch (error) {
    // console.error(error);
    console.error(error.message);
    throw Error("Couldn't sign up", error);
  }
  console.log("seems like signed up");
}
