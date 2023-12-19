import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-10 bg-color-2 py-7">
      <div className="my-1">
        <Logo />
      </div>
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="space-x-4">
          <FaPhoneAlt className="inline-block h-6 w-6" />
          <span>+44 8888 888888</span>
        </div>
        <div className="space-x-4">
          <MdEmail className="inline-block h-6 w-6" />
          <span>contact@avolution.com</span>
        </div>
      </div>
      <p>Site by Jingwei Law</p>
    </footer>
  );
}

export default Footer;
