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
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex w-[600px] flex-col justify-between space-y-6">
      <h2 className="text-3xl font-semibold">{item.name}</h2>
      <div className="w-[648px] self-center bg-stone-200 px-6 py-4">
        <h3 className="text-xl">Addons&#32;&#40;Maximum&#58;&#32;2&#41;</h3>
      </div>
      <AddonItems additions={item.additions} />
      <div className="flex items-center justify-between">
        <div className="flex py-4">
          <HalfRoundButton side="l" onClick={decreaseQuantity}>
            -
          </HalfRoundButton>
          <p className="inline-block border px-6 py-1 text-lg">{quantity}</p>
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
