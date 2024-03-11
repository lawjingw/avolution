import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotlePrice,
} from "./cartSlice";
import { PiShoppingCart } from "react-icons/pi";
import { formatCurrency } from "../../utils/helpers";
import { FaAngleRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

import Modal from "../../ui/Modal";
import Cart from "./Cart";
import Button from "../../ui/Button";
import CreateOrder from "../order/CreateOrder";
import SearchOrderWithButton from "../order/SearchOrderWithButton";

function CartOverview() {
  const cart = useSelector((state) => selectCartItems(state));
  const totalQuantity = useSelector((state) => selectTotalQuantity(state));
  const totalPrice = useSelector((state) => selectTotlePrice(state));

  return (
    <div className="fixed bottom-0 z-10 flex w-full rounded-t-lg border-t bg-white px-2 md:hidden">
      <div className="flex border-r py-1 pr-2">
        <Modal.Open
          opens="search-order"
          renderItem={(open) => (
            <button
              onClick={open}
              className="rounded-full bg-color-1 bg-opacity-10 px-3"
            >
              <FiSearch className="h-full w-5" />
            </button>
          )}
        />
        <Modal.Window name="search-order">
          <SearchOrderWithButton />
        </Modal.Window>
      </div>
      <Modal.Open
        opens="cart"
        renderItem={(open) => (
          <div className="flex grow items-center space-x-3 ps-2" onClick={open}>
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
        )}
      />
      <Modal.Window name="cart">
        <Cart />
      </Modal.Window>
      <Modal.Open
        opens="overview-checkout"
        renderItem={(open) => (
          <div className="py-1">
            <Button onClick={open} isDisabled={totalQuantity < 1}>
              Checkout&nbsp;
              <FaAngleRight className="inline-block text-sm" />
            </Button>
          </div>
        )}
      />
      <Modal.Window name="overview-checkout">
        <CreateOrder cart={cart} />
      </Modal.Window>
    </div>
  );
}

export default CartOverview;
