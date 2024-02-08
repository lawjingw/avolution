import { useState } from "react";
import AddonItems from "./AddonItems";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import HalfRoundButton from "./HalfRoundButton";

function Addons({ item }) {
  const [addons, setAddons] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addPrice = 0;
  const totalPrice = quantity * item.price + addPrice;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex w-[600px] flex-col justify-between space-y-6 px-6 pt-6">
      <h2 className="text-3xl font-semibold">{item.name}</h2>
      <div className="w-[600px] self-center bg-stone-200 px-6 py-4">
        <h3 className="text-xl">Addons&#32;&#40;Maximum&#58;&#32;2&#41;</h3>
      </div>
      <AddonItems additions={item.additions} />
      <div className="flex w-[600px] items-center justify-between self-center px-6 py-4 shadow-[0_-3px_6px_rgba(51,51,51,0.2)]">
        <div className="flex">
          <HalfRoundButton side="l" onClick={decreaseQuantity}>
            -
          </HalfRoundButton>
          <p className="inline-block w-14 border-y border-stone-300 py-1.5 text-center">
            {quantity}
          </p>
          <HalfRoundButton side="r" onClick={increaseQuantity}>
            +
          </HalfRoundButton>
        </div>
        <p className="text-lg">{formatCurrency(totalPrice)}</p>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
}

export default Addons;
