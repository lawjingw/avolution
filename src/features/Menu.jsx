import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuCategory from "./MenuCategory";
import NavCapsule from "./NavCapsule";

export default function Menu() {
  let menu = useLoaderData();

  return (
    <section className="bg-color-2 pb-16 pt-32 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <NavCapsule />
        <MenuCategory menu={menu} name="appetizer" title="appetizer" />
        <MenuCategory menu={menu} name="soup" title="soup" />
        <MenuCategory menu={menu} name="mainCourse" title="main course" />
        <MenuCategory menu={menu} name="dessert" title="dessert" />
        <MenuCategory menu={menu} name="drink" title="drink" />
      </div>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}
