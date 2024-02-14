import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { formatCurrency } from "../../utils/helpers";
import ImageLabel from "./ImageLabel";
import Addons from "./Addons";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectAddonQuantityById } from "../cart/cartSlice";

function MenuItem({ item }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) =>
    selectAddonQuantityById(state, item.id),
  );

  const handleAddToCart = () => {
    dispatch(
      addItem({
        itemId: item.id,
        name: item.name,
        unitPrice: item.price,
        quantity: 1,
        addons: [],
        totalPrice: item.price,
      }),
    );
  };

  return (
    <div className="hover:outline-3 flex basis-64 flex-col justify-between overflow-hidden rounded-3xl bg-white text-center hover:outline hover:outline-color-1">
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
          <Button onClick={handleAddToCart} number={quantity}>
            Order
          </Button>
        ) : (
          <Modal>
            <Modal.Open
              opens="addOns"
              renderItem={(handleClick) => (
                <Button onClick={handleClick} number={quantity}>
                  Order
                </Button>
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
