import { useInView } from "react-intersection-observer";

function HomeSectionFour() {
  const { ref: blockRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="py-10 md:py-20">
      <div
        ref={blockRef}
        className={`mx-auto flex max-w-xl flex-col items-center py-2 text-center opacity-0 transition-opacity duration-500 ease-in ${
          inView ? "!opacity-100" : ""
        }`}
      >
        <h4 className="mt-7 text-xl text-color-6 lg:text-3xl">
          &quot;A must-visit place on the culinary map of the city. It&apos;s
          healthy, fit, and, most importantly, very tasty. Besides salads and
          delicious appetizers, you can also order excellent coffee.
          10/10!&quot;
        </h4>
        <h3 className="mt-11 text-[28px] font-bold text-color-1 lg:text-4xl">
          Gordon Ramsay
        </h3>
      </div>
    </section>
  );
}

export default HomeSectionFour;
