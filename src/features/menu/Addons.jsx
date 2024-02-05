import AddonItems from "./AddonItems";

function Addons({ item }) {
  return (
    <div className="w-[600px]">
      <h2 className="text-xl">{item.name}</h2>
      <h3 className="text-lg">Addons&#32;&#40;Maximum&#58;&#32;2&#41;</h3>
      <AddonItems addons={item.additions} />
    </div>
  );
}

export default Addons;
