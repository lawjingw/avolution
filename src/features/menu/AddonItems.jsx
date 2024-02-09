import AddonItem from "./AddonItem";

function AddonItems({ additions, onIncreaseAddons, onDecreaseAddons }) {
  return (
    <ul className="flex flex-col justify-between space-y-4 py-1">
      {additions.map((addition) => {
        return (
          <AddonItem
            addition={addition}
            key={addition.id}
            onIncreaseAddons={onIncreaseAddons}
            onDecreaseAddons={onDecreaseAddons}
          />
        );
      })}
    </ul>
  );
}

export default AddonItems;
