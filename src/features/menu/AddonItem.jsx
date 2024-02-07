import RoundButton from "./RoundButton";

function AddonItem({ item }) {
  return (
    <li key={item.id} className="flex items-center justify-between">
      <span>{item.name}</span>
      <RoundButton>+</RoundButton>
    </li>
  );
}

export default AddonItem;
