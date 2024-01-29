import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  let menu = useLoaderData();

  return (
    <section className="bg-color-2 pb-16 pt-32 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div>
          <h1>Appetizers</h1>
          <MenuCategory menu={menu} category="appetizer" />
        </div>
        <div>
          <h1>Soups</h1>
        </div>
        <div>
          <h1>Main courses</h1>
        </div>
        <div>
          <h1>Desserts</h1>
        </div>
        <div>
          <h1>Drinks</h1>
        </div>
      </div>
    </section>
  );
}

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}
