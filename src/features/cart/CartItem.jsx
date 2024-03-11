import { useDispatch } from "react-redux";
import RoundButton from "../../ui/RoundButton";
import { formatCurrency } from "../../utils/helpers";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "./cartSlice";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef } from "react";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const firstRender = useRef(true);
  const [itemStyle, itemApi] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));
  const [priceStyle, priceApi] = useSpring(() => ({ scale: 1 }));

  const handleIncreaseItemQuantity = () => {
    dispatch(increaseItemQuantity(item.itemId));
  };

  const handleDecreaseItemQuantity = () => {
    if (item.quantity > 1) {
      dispatch(decreaseItemQuantity(item.itemId));
    } else {
      itemApi.start({
        from: { opacity: 1 },
        to: { opacity: 0 },
        onRest: (r) => {
          if (r.finished) dispatch(removeItem(item.itemId));
        },
      });
    }
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    priceApi.start({
      from: { scale: 1.3 },
      to: { scale: 1 },
    });
  }, [item.totalPrice, item.quantity, priceApi]);

  return (
    <animated.div
      style={itemStyle}
      className="flex justify-between space-x-3 py-4"
    >
      <div>
        <p className="hidden text-sm md:block">
          {item.quantity > 0 ? item.quantity : 1} x {item.name}
        </p>
        <p className="md:hidden">{item.name}</p>
        {item.addons.length
          ? item.addons.map((addition, i) => {
              return (
                <p className="text-xs" key={`${addition.additionId}${i}`}>
                  + {addition.name} ({formatCurrency(addition.price)})
                </p>
              );
            })
          : ""}
      </div>
      <div className="space-y-2 md:space-y-1">
        <animated.div style={priceStyle} className="text-end text-sm">
          {formatCurrency(item.totalPrice)}
        </animated.div>
        <div className="flex items-center space-x-1 space-x-2">
          <RoundButton onClick={handleDecreaseItemQuantity}>-</RoundButton>
          <p className="md:hidden">{item.quantity}</p>
          <RoundButton onClick={handleIncreaseItemQuantity}>+</RoundButton>
        </div>
      </div>
    </animated.div>
  );
}

export default CartItem;
