import { useState } from "react";
import { Link } from "react-scroll";

function CapsuleItem({ name, capsultItemRef, children }) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(true);
  };

  const handleInActive = () => {
    setActive(false);
  };

  return (
    <li ref={capsultItemRef}>
      <Link
        to={name}
        smooth={true}
        duration={500}
        spy={true}
        offset={-200}
        onSetActive={handleActive}
        onSetInactive={handleInActive}
        className={`inline-block whitespace-nowrap rounded-full bg-color-1 px-4 py-2 md:px-6 md:py-3 md:hover:cursor-pointer md:hover:bg-opacity-100 ${
          active ? "bg-opacity-100" : "bg-opacity-10"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

export default CapsuleItem;
