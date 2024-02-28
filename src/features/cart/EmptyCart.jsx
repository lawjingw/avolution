import { PiShoppingCart } from "react-icons/pi";

function EmptyCart() {
  return (
    <div className="py-6 text-center">
      <PiShoppingCart className="mx-auto h-full w-24 text-stone-400" />
      <p className="text-sm text-stone-400">Cart is empty. Add menu items</p>
    </div>
  );
}

export default EmptyCart;
