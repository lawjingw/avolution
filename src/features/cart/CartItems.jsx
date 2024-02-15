function CartItems({ cart }) {
  return (
    <div className="py-6">
      <div className="border-y-2 border-stone-100 py-2">
        <p>Items</p>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Delivery</span>
        <span className="font-semibold">Free</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Tip</span>
        <span className="font-semibold">£0.00</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">TOTAL</span>
        <span className="font-semibold">£0.00</span>
      </div>
    </div>
  );
}

export default CartItems;
