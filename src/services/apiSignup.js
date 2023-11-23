import supabase from "./supabase";

export async function handleSignUp(email, password, name) {
  try {
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: name,
        },
      },
    });
    console.log("data = ");
    console.log(data);
    console.log(error);
    if (data.id)
      await supabase
        .from("profiles")
        .insert([
          { id: data.id },
          { email: email },
          { firstName: name },
          { created_at: data.created_at },
          { id_avatar: 1 },
        ]);
  } catch (error) {
    console.error(error);
    throw Error("Couldn't sign up");
  }
  console.log("seems like signed up");
}
