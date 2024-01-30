import { formatCurrency } from "../utils/helpers";
import ImageLabel from "./ImageLabel";

function MenuItem({ item }) {
  console.log(item);
  return (
    <div className="basis-64  overflow-hidden rounded-3xl bg-white text-center">
      <div className="h-56">
        <img src={item.image} alt="image" className="h-full w-full" />
      </div>

      <h2 className="mb-5 mt-4 px-2 text-lg">{item.name}</h2>
      <ImageLabel labels={item.labels} />
      <p className="mt-4 text-lg">{formatCurrency(item.price)}</p>
    </div>
  );
}

export default MenuItem;
