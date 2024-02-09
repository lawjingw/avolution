import { useState } from "react";
import RoundButton from "./RoundButton";

function AddonItem({ addition, onIncreaseAddons, onDecreaseAddons }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncreaseAddons = () => {
    const currentQuantity = quantity + 1;
    const addon = {
      id: addition.id,
      name: addition.name,
      price: addition.price,
      quantity: 1,
    };
    setQuantity(currentQuantity);
    onIncreaseAddons(addon);
  };

  return (
    <li key={addition.id} className="flex items-center justify-between">
      <span>{addition.name}</span>
      <div className="space-x-3">
        {quantity > 0 && (
          <>
            <RoundButton>-</RoundButton>
            <span>{quantity}</span>
          </>
        )}
        <RoundButton onClick={handleIncreaseAddons}>+</RoundButton>
      </div>
    </li>
  );
}

export default AddonItem;
