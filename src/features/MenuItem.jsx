function MenuItem({ item }) {
  console.log(item);
  return (
    <div className="overflow-hidden rounded-lg bg-white">
      <img src={item.image} alt="image" className="w-full" />
      <h2>{item.name}</h2>
      <p>{item.price}</p>
    </div>
  );
}

export default MenuItem;
