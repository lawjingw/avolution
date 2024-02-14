import CapsuleItem from "./CapsuleItem";

function NavCapsule() {
  return (
    <div className="sticky top-4 z-10 rounded-full bg-white shadow-lg">
      <ul className="flex space-x-2 px-2 py-4">
        <CapsuleItem name="appetizer">Appetizer</CapsuleItem>
        <CapsuleItem name="soup">Soup</CapsuleItem>
        <CapsuleItem name="mainCourse">Main Course</CapsuleItem>
        <CapsuleItem name="dessert">Dessert</CapsuleItem>
        <CapsuleItem name="drink">Drink</CapsuleItem>
      </ul>
    </div>
  );
}

export default NavCapsule;
