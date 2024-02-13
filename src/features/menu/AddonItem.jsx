import { useContext, useState } from "react";
import RoundButton from "./RoundButton";
import { AddonsContext } from "./AddonsContext";

function AddonItem({ addition }) {
  const { isMaxium, increaseAddons, decreaseAddons, findAddonQuantityById } =
    useContext(AddonsContext);

  const quantity = findAddonQuantityById(addition.id);

  const handleIncreaseAddons = () => {
    const addon = {
      id: addition.id,
      name: addition.name,
      price: addition.price,
      quantity: 1,
    };
    increaseAddons(addon);
  };

  const handleDecreaseAddons = () => {
    decreaseAddons(addition.id);
  };

  return (
    <li key={addition.id} className="flex items-center justify-between">
      <span>{addition.name}</span>
      <div className="space-x-3">
        {quantity > 0 && (
          <>
            <RoundButton onClick={handleDecreaseAddons}>-</RoundButton>
            <span>{quantity}</span>
          </>
        )}
        <RoundButton onClick={handleIncreaseAddons} disabled={isMaxium}>
          +
        </RoundButton>
      </div>
    </li>
  );
}

export default AddonItem;
