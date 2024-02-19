import { useState } from "react";
import TipOption from "./TipOption";

const tips = [0, 0.1, 0.2, 0.3];

function TipSelectButton({ totalPrice, onSetTip }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSetTip = (tip) => {
    onSetTip(totalPrice * tip);
    setActiveIndex(tip);
  };

  return (
    <ul className="flex divide-x-2 overflow-hidden rounded-full border-2 border-stone-200">
      {tips.map((tip) => {
        return (
          <TipOption
            tip={tip}
            handleSetTip={handleSetTip}
            isActive={tip === activeIndex}
            key={tip}
          />
        );
      })}
    </ul>
  );
}

export default TipSelectButton;
