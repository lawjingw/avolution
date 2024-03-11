import { useInView } from "react-intersection-observer";

function HomeSectionThree() {
  const { ref: blockRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="py-8 md:py-16">
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-7 px-4 text-center opacity-0 transition-opacity duration-500 ease-in md:flex-row ${
          inView ? "!opacity-100" : ""
        }`}
      >
        <div className="mb-1 mt-7 basis-1/4">
          <div ref={blockRef}>
            <h3 className="px-1 text-[28px] leading-[1.1] text-color-1 lg:text-4xl">
              Healthy and delicious food
            </h3>
            <p className="mt-6 font-medium leading-6 text-color-10">
              We combine health with taste. We cook healthily, and all dishes on
              our menu are low in calories.
            </p>
          </div>
          <div className="mt-16 md:mt-32">
            <h3 className="px-1 text-[28px] leading-[1.1] text-color-1 lg:text-4xl">
              Sugar-free sweet desserts
            </h3>
            <p className="mt-6 font-medium leading-6 text-color-10">
              Is it possible to eat sweets while on a diet? Yes! All our
              desserts are healthy! Instead of sugar, we use the natural
              sweetness of fruits.
            </p>
          </div>
        </div>
        <div className="basis-2/4">
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-1.jpg"
            alt="image"
            className="md:w-4/5 lg:w-full"
          />
        </div>
        <div className="mb-1 mt-7 basis-1/4">
          <div>
            <h3 className="px-1 text-[28px] leading-[1.1] text-color-1 lg:text-4xl">
              Aromatic coffee
            </h3>
            <p className="mt-6 font-medium leading-6 text-color-10">
              Coffee from freshly roasted and carefully selected beans tastes
              delicious every day. Come and try it!
            </p>
          </div>
          <div className="mt-16 md:mt-32">
            <h3 className="px-1 text-[28px] leading-[1.1] text-color-1 lg:text-4xl">
              The power of freshness
            </h3>
            <p className="mt-6 font-medium leading-6 text-color-10">
              We carefully select our ingredients. We only order fresh and
              quality products from local suppliers, including vegetables and
              fruits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSectionThree;
