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
    <div className="sticky top-4 flex h-fit flex-col bg-white px-4 py-6 shadow-lg md:rounded-3xl md:px-5">
      <h1 className="text-2xl">Your order</h1>
      {!cart.length ? <EmptyCart /> : <CartItems cart={cart} />}
      <Modal.Open
        opens="create-order"
        renderItem={(open) => (
          <Button onClick={() => handleOpen(open)} isDisabled={cart.length < 1}>
            Go to checkout&nbsp;
            <FaAngleRight className="inline-block text-sm" />
          </Button>
        )}
      />
      <Modal.Window name="create-order">
        <CreateOrder cart={cart} />
      </Modal.Window>
    </div>
  );
}

export default Cart;
