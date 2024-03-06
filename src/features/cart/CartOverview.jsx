import { useSelector } from "react-redux";
import { selectTotalQuantity, selectTotlePrice } from "./cartSlice";
import { PiShoppingCart } from "react-icons/pi";
import { formatCurrency } from "../../utils/helpers";
import { FaAngleRight } from "react-icons/fa6";

function CartOverview() {
  const totalQuantity = useSelector((state) => selectTotalQuantity(state));
  const totalPrice = useSelector((state) => selectTotlePrice(state));

  return (
    <div className="fixed bottom-0 z-10 flex w-full justify-between rounded-t-lg border-t bg-white px-2 sm:hidden">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <PiShoppingCart className="h-full w-7" />
          {totalQuantity > 0 && (
            <span className="absolute -right-1 -top-1 z-10 inline-block h-4 w-4 rounded-full bg-color-1 text-center text-xs text-white">
              {totalQuantity}
            </span>
          )}
        </div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <button className="col-start-2 row-span-3 row-start-2 my-1 flex items-center space-x-2 rounded-md bg-color-1 px-6 py-3 text-color-2 duration-300">
        <p>Checkout</p>
        <FaAngleRight className="inline text-sm" />
      </button>
    </div>
  );
}

export default CartOverview;
