import MenuItem from "./MenuItem";

function MenuCategory({ menu, category }) {
  const subMenu = menu.filter((item) => {
    return item.category === category;
  });
  return (
    <div className="flex justify-between space-x-6">
      {subMenu.map((item) => {
        return <MenuItem key={item.name} item={item} />;
      })}
    </div>
  );
}

export default MenuCategory;
