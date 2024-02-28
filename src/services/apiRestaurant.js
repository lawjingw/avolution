import supabase from "./supabase";

export async function getMenu() {
  const { data, error } = await supabase
    .from("menu")
    .select(`*, additions (id, name, price)`);

  if (error) {
    console.log(error.message);
    throw new Error("Menu could not be loaded");
  }

  return data;
}

export async function createOrder(orderObj) {
  const { data, error } = await supabase
    .from("order")
    .insert([{ ...orderObj }])
    .select("orderId")
    .limit(1)
    .single();

  if (error) {
    console.log(error.message);
    throw new Error("Order could not be created");
  }

  return data;
}

export async function getOrderById(orderId) {
  const { data, error } = await supabase
    .from("order")
    .select("*")
    .eq("orderId", orderId)
    .limit(1)
    .single();

  if (error) {
    console.log(error.message);
    throw new Error("Order could not be found");
  }

  return data;
}
