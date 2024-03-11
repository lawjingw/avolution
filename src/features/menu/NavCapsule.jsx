import { useInView } from "react-intersection-observer";
import CapsuleItem from "./CapsuleItem";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useRef } from "react";

function NavCapsule() {
  const ulRef = useRef();

  const scroll = (scrollOffset) => {
    ulRef.current.scrollLeft += scrollOffset;
  };

  const { ref: leftArrowRef, inView: leftInView } = useInView({
    threshold: 0.8,
  });
  const { ref: rightArrowRef, inView: rightInView } = useInView({
    threshold: 0.8,
  });

  return (
    <div className="sticky top-24 z-20 w-full rounded-full bg-white shadow-lg md:top-4 md:w-[480px] lg:w-[540px] min-[1150px]:w-full">
      <div className="relative flex items-center px-2 py-2 md:px-4 md:py-4">
        <ul
          ref={ulRef}
          className="no-scrollbar flex items-center space-x-1 overflow-x-scroll scroll-smooth md:space-x-2"
        >
          <CapsuleItem name="appetizer" capsultItemRef={leftArrowRef}>
            Appetizer
          </CapsuleItem>
          <CapsuleItem name="soup">Soup</CapsuleItem>
          <CapsuleItem name="mainCourse">Main Course</CapsuleItem>
          <CapsuleItem name="dessert">Dessert</CapsuleItem>
          <CapsuleItem name="drink" capsultItemRef={rightArrowRef}>
            Drink
          </CapsuleItem>
        </ul>
        <div
          className={`absolute left-2 z-10 w-10 justify-start bg-gradient-to-r from-white py-2 md:py-3 ${
            !leftInView ? "flex" : "hidden"
          }`}
        >
          <button onClick={() => scroll(-110)}>
            <RiArrowLeftSLine className="stroke-1 text-2xl" />
          </button>
        </div>
        <div
          className={`absolute right-2 z-10 flex w-10 items-center justify-end bg-gradient-to-l from-white py-2 md:py-3 ${
            !rightInView ? "flex" : "hidden"
          }`}
        >
          <button onClick={() => scroll(110)}>
            <RiArrowRightSLine className="stroke-1 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavCapsule;
