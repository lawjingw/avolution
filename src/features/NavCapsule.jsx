import CapsuleItem from "./CapsuleItem";

function NavCapsule() {
  return (
    <div className="sticky top-4 rounded-full bg-white shadow-lg">
      <ul className="flex space-x-2 p-2">
        <CapsuleItem name="appetizer" selected={true}>
          Appetizer
        </CapsuleItem>
        <CapsuleItem name="soup">Soup</CapsuleItem>
        <CapsuleItem name="mainCourse">Main Course</CapsuleItem>
        <CapsuleItem name="dessert">Dessert</CapsuleItem>
        <CapsuleItem name="drink">Drink</CapsuleItem>
      </ul>
    </div>
  );
}

export default NavCapsule;
