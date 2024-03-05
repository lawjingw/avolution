import CapsuleItem from "./CapsuleItem";

function NavCapsule() {
  return (
    <div className="top-4 rounded-full bg-white px-3 shadow-lg sm:sticky sm:z-10 sm:px-0">
      <ul className="no-scrollbar flex justify-between space-x-2 overflow-x-auto px-2 py-4 sm:justify-normal">
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
