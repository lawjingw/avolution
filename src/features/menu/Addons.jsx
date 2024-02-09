import { useState } from "react";
import AddonItems from "./AddonItems";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import HalfRoundButton from "./HalfRoundButton";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function Addons({ item }) {
  const dispatch = useDispatch();
  const [addons, setAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);
  console.log(addons);

  const addonsPrice = addons.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );

  const totalPrice = quantity * item.price + addonsPrice;

  const increaseAddons = (addition) => {
    const existingItem = addons.find((item) => item.id === addition.id);
    let newAddons = [];

    if (!existingItem) newAddons = [...addons, addition];
    else
      newAddons = addons.map((addon) => {
        if (addition.id === addon.id) {
          return { ...addon, quantity: addition.quantity + quantity };
        } else {
          return addon;
        }
      });
    setAddons(newAddons);
  };

  const decreaseAddons = (id) => {
    const existingItem = addons.find((item) => item.id === id);
    let newAddons = [];
    const newQuantity = existingItem.quantity - 1;

    if (newQuantity > 0) {
      newAddons = addons.map((addon) => {
        if (id === addon.id) {
          return { ...addon, quantity: newQuantity };
        } else {
          return addon;
        }
      });
    } else {
      newAddons = addons.filter((addition) => addition.id !== id);
    }

    setAddons(newAddons);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addItem({
        itemId: item.id,
        name: item.name,
        unitPrice: item.price,
        quantity: quantity,
        addons: addons,
        totalPrice: totalPrice,
      }),
    );
  };

  return (
    <div className="flex w-[600px] flex-col justify-between space-y-6 px-6 pt-6">
      <h2 className="text-3xl font-semibold">{item.name}</h2>
      <div className="w-[600px] self-center bg-stone-200 px-6 py-4">
        <h3 className="text-xl">Addons&#32;&#40;Maximum&#58;&#32;2&#41;</h3>
      </div>
      <AddonItems
        additions={item.additions}
        onIncreaseAddons={increaseAddons}
        onDecreaseAddons={decreaseAddons}
      />
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
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </div>
    </div>
  );
}

export default Addons;
