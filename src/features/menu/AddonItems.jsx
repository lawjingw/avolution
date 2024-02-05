import AddonItem from "./AddonItem";

function AddonItems({ addons }) {
  return (
    <ul className="my-4 flex flex-col justify-between space-y-2">
      {addons.map((item) => {
        return <AddonItem item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default AddonItems;
