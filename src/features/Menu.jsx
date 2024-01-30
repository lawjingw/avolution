import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  let menu = useLoaderData();

  return (
    <section className="bg-color-2 pb-16 pt-32 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <MenuCategory menu={menu} category="appetizer" />
        <MenuCategory menu={menu} category="soup" />
        <MenuCategory menu={menu} category="main course" />
        <MenuCategory menu={menu} category="dessert" />
        <MenuCategory menu={menu} category="drink" />
      </div>
    </section>
  );
}

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}
