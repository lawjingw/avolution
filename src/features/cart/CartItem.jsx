import { useDispatch } from "react-redux";
import RoundButton from "../../ui/RoundButton";
import { formatCurrency } from "../../utils/helpers";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between space-x-3">
      <div>
        <p className="text-sm">
          {item.quantity} x {item.name}
        </p>
        {item.addons.length
          ? item.addons.map((addition) => {
              return (
                <p className="text-xs" key={addition.additionId}>
                  + {addition.name} ({formatCurrency(addition.price)})
                </p>
              );
            })
          : ""}
      </div>
      <div>
        <p className="text-sm">{formatCurrency(item.totalPrice)}</p>
        <div className="flex space-x-1">
          <RoundButton
            onClick={() => dispatch(decreaseItemQuantity(item.itemId))}
          >
            -
          </RoundButton>
          <RoundButton
            onClick={() => dispatch(increaseItemQuantity(item.itemId))}
          >
            +
          </RoundButton>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
