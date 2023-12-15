import Button from "./Button";

function Navbar() {
  return (
    <ul className="flex space-x-2">
      <li>
        <Button type="nav" to="/">
          Home
        </Button>
      </li>
      <li>
        <Button type="nav" to="/aboutUs">
          About us
        </Button>
      </li>
      <li>
        <Button type="nav" to="/gallery">
          Gallery
        </Button>
      </li>
      <li>
        <Button type="nav" to="/contact">
          Contact
        </Button>
      </li>
    </ul>
  );
}

export default Navbar;
