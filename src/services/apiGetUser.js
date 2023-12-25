import handleSearchProfile from "./apiSearchProfile";
import supabase from "./supabase";

export async function handleGetUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const profileData = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user?.id);
    if (profileData?.data[0]) {
      const { first_name, id_avatar } = profileData?.data[0];
      user.first_name = first_name;
      user.id_avatar = id_avatar;
    }
  }
  return user;
}
