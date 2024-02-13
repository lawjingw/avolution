import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { formatCurrency } from "../../utils/helpers";
import ImageLabel from "./ImageLabel";
import Addons from "./Addons";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function MenuItem({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        itemId: item.id,
        name: item.name,
        unitPrice: item.price,
        quantity: "1",
        totalPrice: item.price,
      }),
    );
  };

  return (
    <div className="flex basis-64 flex-col justify-between overflow-hidden rounded-3xl bg-white text-center">
      <div className="mb-5">
        <div className="h-56">
          <img src={item.image} alt="image" className="h-full w-full" />
        </div>
        <h2 className="px-2 text-lg">{item.name}</h2>
      </div>

      <div className="mx-4 mb-4 flex flex-col space-y-4">
        <ImageLabel labels={item.labels} />
        <p className="text-lg">{formatCurrency(item.price)}</p>
        {item.additions.length === 0 ? (
          <Button onClick={handleAddToCart}>Order</Button>
        ) : (
          <Modal>
            <Modal.Open
              opens="addOns"
              renderItem={(handleClick) => (
                <Button onClick={handleClick}>Order</Button>
              )}
            />
            <Modal.Window name="addOns">
              <Addons item={item} />
            </Modal.Window>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
