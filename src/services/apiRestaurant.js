import supabase from "./supabase";

export async function getMenu() {
  const { data, error } = await supabase
    .from("menu")
    .select(`*, additions (id, name, price)`);

  if (error) {
    console.log(error.details);
    throw new Error("Menu could not be loaded");
  }

  return data;
}
