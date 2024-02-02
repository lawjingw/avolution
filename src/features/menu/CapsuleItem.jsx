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
    <li>
      <Link
        to={name}
        smooth={true}
        duration={500}
        spy={true}
        offset={-200}
        onSetActive={handleActive}
        onSetInactive={handleInActive}
        className={`hover: cursor-pointer rounded-full bg-color-1 px-6 py-3 hover:bg-opacity-100 ${
          active ? "bg-opacity-100" : "bg-opacity-10"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

export default CapsuleItem;
