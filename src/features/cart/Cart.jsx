import EmptyCart from "./EmptyCart";

function Cart() {
  return (
    <div className="sticky top-4 row-span-2 h-fit rounded-3xl bg-white shadow-lg">
      <EmptyCart />
    </div>
  );
}

export default Cart;
