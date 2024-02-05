function AddonItem({ item }) {
  return (
    <li key={item.id} className="flex justify-between">
      <span>{item.name}</span>
      <button>+</button>
    </li>
  );
}

export default AddonItem;
