/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { createOrder, getMenu } from "../../services/apiRestaurant";
import MenuCategory from "./MenuCategory";
import NavCapsule from "./NavCapsule";
import Cart from "../cart/cart";

export default function Menu() {
  let menu = useLoaderData();

  return (
    <section className="bg-color-2 pb-16 pt-32 sm:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_16rem] grid-rows-[auto_1fr] gap-8 px-4">
        <NavCapsule />
        <Cart />
        <div>
          <MenuCategory menu={menu} name="appetizer" title="appetizer" />
          <MenuCategory menu={menu} name="soup" title="soup" />
          <MenuCategory menu={menu} name="mainCourse" title="main course" />
          <MenuCategory menu={menu} name="dessert" title="dessert" />
          <MenuCategory menu={menu} name="drink" title="drink" />
        </div>
      </div>
    </section>
  );
}

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

export async function menuAction({ request }) {
  let formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "create") {
    formData.delete("intent");
    const data = Object.fromEntries(formData);
    const newData = { ...data, cart: JSON.parse(data.cart) };
    await createOrder(newData);
  }

  return { ok: true };
}
