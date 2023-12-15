import Logo from "./Logo";
import Navbar from "./Navbar";
import OrderOnline from "./OrderOnline";

function Header() {
  return (
    <div className="bg-color-2">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Logo />
        <Navbar />
        <OrderOnline />
      </div>
    </div>
  );
}

export default Header;
