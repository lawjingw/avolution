import { useInView } from "react-intersection-observer";

function HomeSectionOne() {
  const { ref: blockRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="bg-color-11 py-16 sm:bg-[url('https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/bg.jpg')] sm:bg-cover sm:bg-fixed sm:py-32">
      <div
        ref={blockRef}
        className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-8 px-4 sm:flex-row"
      >
        <div
          className={`flex basis-1/2 -translate-x-3/4 flex-col items-center opacity-0 transition-transform duration-500 ease-in ${
            inView ? "translate-x-0 opacity-100" : ""
          } `}
        >
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-2.jpg"
            alt="image"
            className="w-4/5 rounded-b-[90px] rounded-t-[200px]"
          />
        </div>
        <div
          className={`flex basis-1/2 translate-x-3/4 flex-col items-center py-2 opacity-0 transition-transform duration-500 ease-in sm:items-start ${
            inView ? "-translate-x-0 opacity-100" : ""
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
          <button className="my-2 rounded-full border-2 border-white px-8 py-5 font-inter text-lg text-white duration-300">
            Order online
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeSectionOne;
