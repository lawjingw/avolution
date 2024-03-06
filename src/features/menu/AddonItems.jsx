import { useContext } from "react";
import AddonItem from "./AddonItem";
import { AddonsContext } from "./AddonsContext";

function AddonItems() {
  const { additions } = useContext(AddonsContext);
  return (
    <ul className="flex flex-col justify-between space-y-4 px-4 py-1 sm:px-0">
      {additions.map((addition) => {
        return <AddonItem addition={addition} key={addition.id} />;
      })}
    </ul>
  );
}

export default AddonItems;
