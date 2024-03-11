import { useSelector } from "react-redux";
import { selectTotlePrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import CartItem from "./CartItem";
import TipSelectButton from "./TipSelectButton";
import { useContext } from "react";
import { ModalContext } from "../../ui/ModalContext";

function CartItems({ cart }) {
  const modalContext = useContext(ModalContext);
  const totalPrice = useSelector((state) => selectTotlePrice(state));
  const tip = useSelector((state) => state.cart.tip);
  const finalPrice = totalPrice + totalPrice * tip;
  const tipClass = `md:block ${
    modalContext?.openName !== "overview-checkout" && "hidden"
  }`;

  return (
    <div className="py-6">
      <div className="divide-y-[1px] overflow-scroll border-y-2 border-stone-100 md:divide-y-0 md:divide-stone-100">
        {cart.map((item, i) => {
          return <CartItem item={item} key={`${item.itemId}${i}`} />;
        })}
      </div>
      <div className="mt-2 flex justify-between text-sm">
        <span className="font-semibold">Delivery</span>
        <span className="font-semibold">Free</span>
      </div>
      <div className={tipClass}>
        <div className="mb-1 mt-2 flex justify-between text-sm">
          <span className="font-semibold">Tip</span>
          <span className="font-semibold">
            {formatCurrency(totalPrice * tip)}
          </span>
        </div>
        <TipSelectButton tip={tip} />
      </div>
      <div className="mt-6 flex items-center justify-between text-sm md:mt-2">
        <span className="font-semibold">TOTAL</span>
        <span className="text-2xl font-semibold md:text-base">
          {formatCurrency(finalPrice)}
        </span>
      </div>
    </div>
  );
}

export default CartItems;
