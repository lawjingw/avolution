import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { formatCurrency } from "../../utils/helpers";
import ImageLabel from "./ImageLabel";
import Addons from "./Addons";

function MenuItem({ item }) {
  return (
    <div className="flex basis-64 flex-col justify-between overflow-hidden rounded-3xl bg-white text-center">
      <div className="mb-5">
        <div className="h-56">
          <img src={item.image} alt="image" className="h-full w-full" />
        </div>
        <h2 className="text-lg">{item.name}</h2>
      </div>

      <div className="mx-4 mb-4 flex flex-col space-y-4">
        <ImageLabel labels={item.labels} />
        <p className="text-lg">{formatCurrency(item.price)}</p>
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
      </div>
    </div>
  );
}

export default MenuItem;
