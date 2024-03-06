import { useContext, useState } from "react";
import AddonItems from "./AddonItems";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import HalfRoundButton from "./HalfRoundButton";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import { AddonsContext } from "./AddonsContext";
import { ModalContext } from "../../ui/ModalContext";

function Addons({ item }) {
  const { close } = useContext(ModalContext);

  const dispatch = useDispatch();
  const additions = item.additions;
  const [quantity, setQuantity] = useState(1);

  const [addons, setAddons] = useState([]);
  const addonsQuantity = addons.reduce((acc, cur) => acc + cur.quantity, 0);
  const isMaxium = addonsQuantity === 2;
  const addonsPrice = addons.reduce((acc, cur) => acc + cur.price, 0);

  const totalPrice = quantity * item.price + addonsPrice;

  const increaseAddons = (addition) => {
    setAddons([...addons, addition]);
  };

  const decreaseAddons = (id) => {
    const delIndex = addons.findIndex((addition) => addition.additionId === id);
    const newAddons = addons.filter((addition, i) => i !== delIndex);
    setAddons(newAddons);
  };

  const findAddonQuantityById = (id) => {
    let quantity = 0;
    addons.forEach((addition) => {
      if (addition?.additionId === id) quantity++;
    });
    return quantity;
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
        category: item.category,
        unitPrice: item.price,
        quantity: quantity,
        addons: addons,
        totalPrice: totalPrice,
      }),
    );
    close();
  };

  return (
    <div className="flex flex-col justify-between space-y-6 pt-6 sm:w-[600px] sm:px-6">
      <h2 className="px-4 text-3xl font-semibold sm:px-0">{item.name}</h2>
      <div className="w-full self-center bg-stone-200 px-4 py-4 sm:w-[600px] sm:px-6">
        <h3 className="text-xl">Addons&#32;&#40;Maximum&#58;&#32;2&#41;</h3>
      </div>
      <AddonsContext.Provider
        value={{
          additions,
          isMaxium,
          increaseAddons,
          decreaseAddons,
          findAddonQuantityById,
        }}
      >
        <AddonItems />
      </AddonsContext.Provider>
      <div className="flex w-full flex-col justify-between gap-3 self-center px-4 py-4 shadow-[0_-3px_6px_rgba(51,51,51,0.2)] sm:w-[600px] sm:flex-row sm:px-6">
        <div className="flex items-center justify-between sm:space-x-28">
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
        </div>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </div>
    </div>
  );
}

export default Addons;
