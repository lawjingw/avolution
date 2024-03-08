/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import {
  createOrder,
  getMenu,
  getOrderById,
} from "../../services/apiRestaurant";
import MenuCategory from "./MenuCategory";
import NavCapsule from "./NavCapsule";
import Cart from "../cart/Cart";
import SearchOrder from "../order/SearchOrder";
import { getAddress } from "../../services/apiGeocoding";
import CartOverview from "../cart/CartOverview";
import Modal from "../../ui/Modal";

export default function Menu() {
  let menu = useLoaderData();

  return (
    <section className="bg-color-2 py-8 sm:py-16">
      <Modal>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:grid sm:grid-cols-[1fr_16rem] sm:grid-rows-[auto_1fr] sm:gap-8 sm:px-4">
          <NavCapsule />
          <div className="row-span-2 hidden space-y-4 sm:block">
            <SearchOrder />
            <Cart />
          </div>
          <div className="px-4 sm:px-0">
            <MenuCategory menu={menu} name="appetizer" title="appetizer" />
            <MenuCategory menu={menu} name="soup" title="soup" />
            <MenuCategory menu={menu} name="mainCourse" title="main course" />
            <MenuCategory menu={menu} name="dessert" title="dessert" />
            <MenuCategory menu={menu} name="drink" title="drink" />
          </div>
          <CartOverview />
        </div>
      </Modal>
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
    const newData = {
      ...data,
      cart: JSON.parse(data.cart),
      orderId: Date.now(),
    };
    const newOrder = await createOrder(newData);
    return newOrder;
  }

  if (intent === "query") {
    try {
      const orderId = formData.get("query");
      const order = await getOrderById(orderId);
      return { order: order, ok: "success" };
    } catch (error) {
      return { order: null, ok: "fail" };
    }
  }

  if (intent === "address") {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);

    // 3) Then we return an object with the data that we are interested in
    return {
      city: addressObj.city,
      county: addressObj.locality,
      postcode: addressObj.postcode,
    };
  }

  throw { message: "Invalid intent" };
}

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
