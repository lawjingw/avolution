import { FaBed, FaCoffee, FaUtensils } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function HomeSectionTwo() {
  const { ref: blockRef, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section className="bg-color-9 py-12 md:py-24">
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center justify-between space-y-10 px-4 opacity-0 transition-opacity duration-500 ease-in md:flex-row md:space-y-0 ${
          inView ? "!opacity-100" : ""
        }`}
      >
        <div
          ref={blockRef}
          className="flex basis-1/3 flex-col items-center text-center"
        >
          <FaCoffee className="text-7xl text-color-1" />
          <h3 className="pt-5 text-[28px] text-color-6 lg:text-4xl">
            Aromatic coffee
          </h3>
          <p className="pt-3 font-medium leading-6 text-color-6">
            We carefully select the coffee beans.
          </p>
        </div>
        <div className="flex basis-1/3 flex-col items-center text-center">
          <FaBed className="text-7xl text-color-1" />
          <h3 className="pt-5 text-[28px] text-color-6 lg:text-4xl">
            Comfort and chill
          </h3>
          <p className="pt-3 font-medium leading-6 text-color-6">
            Our comfortable couches will make you forget about your troubles.
          </p>
        </div>
        <div className="flex basis-1/3 flex-col items-center text-center">
          <FaUtensils className="text-7xl text-color-1" />
          <h3 className="pt-5 text-[28px] text-color-6 lg:text-4xl">
            Healthy food
          </h3>
          <p className="pt-3 font-medium leading-6 text-color-6">
            We cook healthily and tasty.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeSectionTwo;
