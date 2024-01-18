import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function HomeSectionFive() {
  const { ref: blockRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="bg-color-9 py-8 sm:py-16">
      <div
        ref={blockRef}
        className={`mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row sm:opacity-0 sm:transition-opacity sm:duration-500 sm:ease-in ${
          inView ? "sm:!opacity-100" : ""
        }`}
      >
        <div className="basis-1/4 px-4">
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-3.jpg"
            alt="image"
            className="w-[400px] rounded-[150px]"
          />
        </div>
        <div className="basis-2/4 text-center">
          <h2 className="mt-7 px-8 text-3xl leading-[1.1] text-color-6 lg:text-5xl">
            How about healthy meal delivery service?
          </h2>
          <h4 className="mb-10 mt-9 px-1 text-xl leading-[1.1] text-color-6 lg:text-3xl">
            You can order a catering service from us. What does this mean? Why
            is it worth it? Every day, we will deliver your meals according to
            your diet and culinary preferences. Contact us for more details.
          </h4>
          <Link
            to="orderOnline"
            className="my-2 rounded-full bg-color-0 px-8 py-5 font-inter text-lg text-white duration-300"
          >
            Order online
          </Link>
        </div>
        <div className="basis-1/4 px-4">
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-4.jpg"
            alt="image"
            className="w-[400px] rounded-[150px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSectionFive;
