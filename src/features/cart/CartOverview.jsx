import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotlePrice,
} from "./cartSlice";
import { PiShoppingCart } from "react-icons/pi";
import { formatCurrency } from "../../utils/helpers";
import { FaAngleRight } from "react-icons/fa6";
import Modal from "../../ui/Modal";
import Cart from "./cart";
import Button from "../../ui/Button";
import CreateOrder from "../order/CreateOrder";

function CartOverview() {
  const cart = useSelector((state) => selectCartItems(state));
  const totalQuantity = useSelector((state) => selectTotalQuantity(state));
  const totalPrice = useSelector((state) => selectTotlePrice(state));

  return (
    <Modal>
      <div className="fixed bottom-0 z-10 flex w-full rounded-t-lg border-t bg-white px-2 sm:hidden">
        <Modal.Open
          opens="cart"
          renderItem={(open) => (
            <div className="flex grow items-center space-x-3" onClick={open}>
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
        <div className="my-1">
          <Modal.Open
            opens="overview-checkout"
            renderItem={(open) => (
              <Button onClick={open} isDisabled={totalQuantity < 1}>
                Checkout&nbsp;
                <FaAngleRight className="inline-block text-sm" />
              </Button>
            )}
          />
          <Modal.Window name="overview-checkout">
            <CreateOrder cart={cart} />
          </Modal.Window>
        </div>
      </div>{" "}
    </Modal>
  );
}

export default CartOverview;
