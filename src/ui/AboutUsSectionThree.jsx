import { useInView } from "react-intersection-observer";

function AboutUsSectionOne() {
  const { ref: blockRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="py-16 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-8 px-4 sm:flex-row">
        <div
          ref={blockRef}
          className={`flex basis-1/2 flex-col items-center opacity-0 transition-opacity duration-500 ease-in ${
            inView ? "!opacity-100" : ""
          } `}
        >
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/person-2.jpg"
            alt="image"
            className="w-4/5"
          />
        </div>
        <div
          className={`flex basis-1/2 flex-col items-center py-2 opacity-0 transition-opacity duration-500 ease-in sm:items-start ${
            inView ? "!opacity-100" : ""
          }`}
        >
          <h2 className="mb-6 px-8 text-center text-3xl leading-[1.1] text-color-6 lg:text-5xl">
            Good for your <span className="text-color-1">soul and body!</span>
          </h2>
          <p className="mb-10 font-medium leading-6 text-color-6">
            Forget about your hard day and just relax. Calm your senses and
            rest. Our restaurant was created for such moments. Here you can
            relax and regain energy while enjoying aromatic coffee and dishes
            with our hero: always healthy and delicious... AVOLUTION!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSectionOne;
