import AddonItem from "./AddonItem";

function AddonItems({ additions }) {
  return (
    <ul className="flex flex-col justify-between space-y-4 py-1">
      {additions.map((item) => {
        return <AddonItem item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default AddonItems;
