import MenuItem from "./MenuItem";

function MenuCategory({ menu, category }) {
  const subMenu = menu.filter((item) => {
    return item.category === category;
  });
  return (
    <div className="py-4">
      <h1 className="mb-8 text-3xl capitalize">{category}</h1>
      <div className="flex flex-wrap justify-start gap-6">
        {subMenu.map((item) => {
          return <MenuItem key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
}

export default MenuCategory;
