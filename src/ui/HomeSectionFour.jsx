import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function HomeSectionFour() {
  const { ref: blockRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="bg-color-4 py-16 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div
          ref={blockRef}
          className={`flex basis-1/2 flex-col items-center py-2 opacity-0 transition-opacity duration-500 ease-in md:items-start ${
            inView ? "!opacity-100" : ""
          }`}
        >
          <h4 className="mt-7 text-xl text-color-1 lg:text-3xl">
            Authentic fit food
          </h4>
          <h2 className="mt-11 text-3xl leading-[1.1] text-white lg:text-5xl">
            Avocado is our superhero!
          </h2>
          <p className="mt-6 font-medium leading-6 text-white">
            We focus on health and taste. In the heart of our kitchen, we put
            avocado, the healthiest fruit in the world, which is a real mine of
            vitamins and nutrients! All our dishes are created based on this
            beauty.
          </p>
          <Link
            to="orderOnline"
            className="mx-auto my-2 mt-6 rounded-full border-2 border-color-1 px-8 py-5 font-inter text-lg text-color-1 md:mx-0"
          >
            Order online
          </Link>
        </div>
        <div
          className={`flex basis-1/2 flex-col items-center opacity-0 transition-opacity duration-500 ease-in ${
            inView ? "!opacity-100" : ""
          } `}
        >
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/person-1.jpg"
            alt="image"
            className="rounded-t-[200px] md:w-3/5 lg:w-4/5"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSectionFour;
