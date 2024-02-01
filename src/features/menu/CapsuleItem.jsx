import { useState } from "react";
import { Link } from "react-scroll";

function CapsuleItem({ name, children }) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(true);
  };

  const handleInActive = () => {
    setActive(false);
  };

  return (
    <li
      className={`rounded-full bg-color-1 px-6 py-3 hover:cursor-pointer hover:bg-opacity-100 ${
        active ? "bg-opacity-100" : "bg-opacity-10"
      }`}
    >
      <Link
        to={name}
        smooth={true}
        duration={800}
        spy={true}
        offset={-200}
        onSetActive={handleActive}
        onSetInactive={handleInActive}
      >
        {children}
      </Link>
    </li>
  );
}

export default CapsuleItem;
