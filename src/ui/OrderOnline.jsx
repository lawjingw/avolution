function OrderOnline({ device }) {
  const base =
    "rounded-full bg-color-1 px-5 py-3.5 text-lg font-bold text-color-2 duration-300 hover:bg-color-3 hover:text-black";
  const style = {
    mobile: "w-full",
  };

  const className = `${base} ${style[device]}`;

  return <button className={className}>Order online</button>;
}

export default OrderOnline;
