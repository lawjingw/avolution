import { useSelector } from "react-redux";
import { selectTotlePrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import CartItem from "./CartItem";
import { useState } from "react";
import TipSelectButton from "./TipSelectButton";

function CartItems({ cart }) {
  const totalPrice = useSelector((state) => selectTotlePrice(state));
  const [tip, setTip] = useState(0);

  const finalPrice = totalPrice + tip;

  return (
    <div className="py-6">
      <div className="space-y-4 overflow-scroll border-y-2 border-stone-100 py-4">
        {cart.map((item) => {
          return (
            <CartItem item={item} key={`${item.itemId}${item.addons.length}`} />
          );
        })}
      </div>
      <div className="mt-2 flex justify-between text-sm">
        <span className="font-semibold">Delivery</span>
        <span className="font-semibold">Free</span>
      </div>
      <div className="mb-1 mt-2 flex justify-between text-sm">
        <span className="font-semibold">Tip</span>
        <span className="font-semibold">{formatCurrency(tip)}</span>
      </div>
      <TipSelectButton totalPrice={totalPrice} onSetTip={setTip} />
      <div className="mt-2 flex justify-between text-sm">
        <span className="font-semibold">TOTAL</span>
        <span className="font-semibold">{formatCurrency(finalPrice)}</span>
      </div>
    </div>
  );
}

export default CartItems;
