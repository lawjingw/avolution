import { PiShoppingCart } from "react-icons/pi";

function EmptyCart() {
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl">Your order</h1>
      <PiShoppingCart className="mx-auto mt-6 h-full w-1/2 text-stone-400" />
      <p className="text-sm text-stone-400">Cart is empty. Add menu items</p>
    </div>
  );
}

export default EmptyCart;
