import TipOption from "./TipOption";
import { useDispatch } from "react-redux";
import { addTip } from "./cartSlice";

const tips = [0, 0.1, 0.2, 0.3];

function TipSelectButton({ tip }) {
  const dispatch = useDispatch();

  const handleSetTip = (tip) => {
    dispatch(addTip(tip));
  };

  return (
    <ul className="flex divide-x-2 overflow-hidden rounded-full border-2 border-stone-200">
      {tips.map((t) => {
        return (
          <TipOption
            tip={t}
            handleSetTip={handleSetTip}
            isActive={t === tip}
            key={t}
          />
        );
      })}
    </ul>
  );
}

export default TipSelectButton;
