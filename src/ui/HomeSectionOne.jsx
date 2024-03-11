import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function HomeSectionOne() {
  const { ref: blockRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="bg-color-11 py-16 md:bg-[url('https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/bg.jpg')] md:bg-cover md:bg-fixed md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-8 px-4 md:flex-row">
        <div
          ref={blockRef}
          className={`flex basis-1/2 flex-col items-center opacity-0 transition-all duration-500 ease-in ${
            inView ? "!opacity-100" : ""
          } `}
        >
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-2.jpg"
            alt="image"
            className="rounded-b-[90px] rounded-t-[200px] md:w-3/5 lg:w-4/5"
          />
        </div>
        <div
          className={`flex basis-1/2 flex-col items-center py-2 md:items-start md:opacity-0 md:transition-opacity md:duration-500 md:ease-in ${
            inView ? "md:!opacity-100" : ""
          }`}
        >
          <h4 className="mb-11 mt-5 text-xl leading-[1.1] text-white lg:text-3xl">
            Looking for something delicious and fit? You will love our
            restaurant!
          </h4>
          <h2 className="mb-6 text-3xl leading-[1.1] text-white lg:text-5xl">
            We invite you to Avolution! Here you will always eat something tasty
          </h2>
          <p className="mb-10 font-medium leading-6 text-white">
            Are you ready for an explosion of flavor? At our restaurant, we
            combine our two passions: love for healthy living and delicious
            food. How is this possible? We opt for natural and fresh ingredients
            and unique spices. At its heart is the avocado!
          </p>
          <Link
            to="orderOnline"
            className="my-2 rounded-full border-2 border-white px-8 py-5 font-inter text-lg text-white duration-300"
          >
            Order online
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeSectionOne;
