import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function HomeHeader() {
  const { ref: blockRef, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <header className="h-fit bg-white bg-[url('https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/wave.png')] bg-cover bg-fixed bg-[center_top_2rem] pb-16 pt-44 md:h-auto md:pb-32 md:pt-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div className="flex flex-col items-center justify-center px-1 md:basis-1/2 md:items-start">
          <h1 className="mt-7 text-5xl leading-[1.1] text-color-6 lg:text-7xl">
            The Green Way to Eat, <br />
            <span className="text-color-1">AVOLUTION!</span>
          </h1>
          <h4 className="mb-4 mt-9 text-xl leading-[1.1] text-color-6 lg:text-3xl">
            Enjoy our avocado specialties from Monday to Sunday!
          </h4>
          <Link
            to="orderOnline"
            className="my-2 rounded-full bg-color-0 px-8 py-5 font-inter text-lg text-white"
          >
            Order online
          </Link>
        </div>
        <div
          ref={blockRef}
          className={`basis-1/2 opacity-0 transition-opacity duration-500 ease-in ${
            inView ? "!opacity-100" : ""
          } `}
        >
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/hero.png"
            alt="hero"
            className="md:w-4/5 lg:w-full"
          />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
