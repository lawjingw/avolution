import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-7 pb-7">
      <Logo />
      <div className="flex items-center justify-between space-x-4">
        <FaPhoneAlt className="inline-block h-6 w-6" />
        <span>+44 8888 888888</span>
        <MdEmail className="inline-block h-6 w-6" />
        <span>contact@avolution.com</span>
      </div>
      <p>Site by Jingwei Law</p>
    </footer>
  );
}

export default Footer;
