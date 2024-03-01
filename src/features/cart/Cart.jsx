import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import Button from "../../ui/Button";
import { FaAngleRight } from "react-icons/fa6";
import CartItems from "./CartItems";
import Modal from "../../ui/Modal";
import CreateOrder from "../order/CreateOrder";
import { selectCartItems } from "./cartSlice";
import toast from "react-hot-toast";

function Cart() {
  const cart = useSelector((state) => selectCartItems(state));

  const handleOpen = (open) => {
    cart.length ? open() : toast.error("Cart is empty. Add menu items.");
  };

  return (
    <div className="sticky top-4 flex h-fit flex-col rounded-3xl bg-white px-5 py-6 shadow-lg">
      <h1 className="text-2xl">Your order</h1>
      {!cart.length ? <EmptyCart /> : <CartItems cart={cart} />}
      <Modal>
        <Modal.Open
          opens="create-order"
          renderItem={(open) => (
            <Button onClick={() => handleOpen(open)}>
              Go to checkout <FaAngleRight className="inline text-sm" />
            </Button>
          )}
        />
        <Modal.Window name="create-order">
          <CreateOrder cart={cart} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Cart;
