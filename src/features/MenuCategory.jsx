import MenuItem from "./MenuItem";

function MenuCategory({ menu, name, title }) {
  const subMenu = menu.filter((item) => {
    return item.category === title;
  });
  return (
    <div className="py-4" name={name}>
      <h1 className="mb-8 text-3xl capitalize">{title}</h1>
      <div className="flex flex-wrap justify-start gap-6">
        {subMenu.map((item) => {
          return <MenuItem key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
}

export default MenuCategory;
