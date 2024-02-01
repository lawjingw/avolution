import {
  FaAward,
  FaWheatAwn,
  FaPepperHot,
  FaStar,
  FaSeedling,
} from "react-icons/fa6";

function ImageLabel({ labels }) {
  return (
    <div className="flex justify-center space-x-2">
      {labels &&
        labels.map((label) => {
          return (
            <div
              className="flex items-center space-x-2 rounded-sm bg-stone-100 px-2 py-1"
              key={label}
            >
              {label === "bestseller" && (
                <FaAward className="inline text-amber-500" />
              )}
              {label === "gluten" && (
                <FaWheatAwn className="inline text-yellow-700" />
              )}
              {label === "spicy" && (
                <FaPepperHot className="inline text-red-500" />
              )}
              {label === "new" && <FaStar className="inline text-blue-500" />}
              {label === "vegan" && (
                <FaSeedling className="inline text-green-500" />
              )}

              <span className="inline-block text-xs capitalize">{label}</span>
            </div>
          );
        })}
    </div>
  );
}

export default ImageLabel;
