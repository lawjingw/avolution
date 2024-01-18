import { Link } from "react-router-dom";

function OrderOnlineButton({ device }) {
  const base =
    "rounded-full bg-color-1 px-5 py-4 text-lg font-bold text-color-2 duration-300 hover:bg-color-3 hover:text-black";
  const style = {
    mobile: "w-full",
  };

  const className = `${base} ${style[device]}`;

  return (
    <Link className={className} to="orderOnline">
      Order online
    </Link>
  );
}

export default OrderOnlineButton;
