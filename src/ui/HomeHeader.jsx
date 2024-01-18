import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <header className="h-screen bg-white bg-[url('https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/wave.png')] bg-cover bg-fixed bg-top pb-16 pt-32 sm:h-auto sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row">
        <div className="flex basis-1/2 flex-col items-center justify-center px-1 sm:items-start">
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
        <div className="basis-1/2">
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/hero.png"
            alt="hero"
            className="sm:w-full"
          />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
