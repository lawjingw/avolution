import { FaBed, FaCoffee, FaUtensils } from "react-icons/fa";

function Home() {
  return (
    <div className="font-sora">
      <section className="bg-white bg-[url('https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/wave.png')] bg-cover bg-fixed bg-top py-16 sm:py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row">
          <div className="flex basis-1/2 flex-col items-center sm:items-start">
            <h1 className="mt-7 text-5xl leading-[1.1] text-color-6 sm:text-7xl">
              The Green Way to Eat, <br />
              <span className="text-color-1">AVOLUTION!</span>
            </h1>
            <h4 className="mb-4 mt-9 text-xl leading-[1.1] text-color-6 sm:text-3xl">
              Enjoy our avocado specialties from Monday to Sunday!
            </h4>
            <button className="my-2 rounded-full bg-color-0 px-8 py-5 font-inter text-lg text-white duration-300">
              Order online
            </button>
          </div>
          <div className="basis-1/2">
            <img
              src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/hero.png"
              alt="hero"
              className="sm:max-w-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-color-11 py-16 sm:bg-[url('https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/bg.jpg')] sm:bg-cover sm:bg-fixed sm:py-32">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-8 px-4 sm:flex-row">
          <div className="flex basis-1/2 flex-col items-center">
            <img
              src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-2.jpg"
              alt="image"
              className="w-4/5 rounded-b-[90px] rounded-t-[200px]"
            />
          </div>
          <div className="flex basis-1/2 flex-col items-center py-2 sm:items-start">
            <h4 className="mb-11 mt-5 text-xl leading-[1.1] text-white sm:text-3xl">
              Looking for something delicious and fit? You will love our
              restaurant!
            </h4>
            <h2 className="mb-6 text-3xl leading-[1.1] text-white sm:text-5xl">
              We invite you to Avolution! Here you will always eat something
              tasty
            </h2>
            <p className="mb-10 font-medium leading-6 text-white">
              Are you ready for an explosion of flavor? At our restaurant, we
              combine our two passions: love for healthy living and delicious
              food. How is this possible? We opt for natural and fresh
              ingredients and unique spices. At its heart is the avocado!
            </p>
            <button className="my-2 rounded-full border-2 border-white px-8 py-5 font-inter text-lg text-white duration-300">
              Order online
            </button>
          </div>
        </div>
      </section>

      <section className="bg-color-9 py-12 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-10 px-4 sm:flex-row sm:space-y-0">
          <div className="flex basis-1/3 flex-col items-center text-center">
            <FaCoffee className="text-7xl text-color-1" />
            <h3 className="pt-5 text-[28px] text-color-6 sm:text-4xl">
              Aromatic coffee
            </h3>
            <p className="pt-3 font-medium leading-6 text-color-6">
              We carefully select the coffee beans.
            </p>
          </div>
          <div className="flex basis-1/3 flex-col items-center text-center">
            <FaBed className="text-7xl text-color-1" />
            <h3 className="pt-5 text-[28px] text-color-6 sm:text-4xl">
              Comfort and chill
            </h3>
            <p className="pt-3 font-medium leading-6 text-color-6">
              Our comfortable couches will make you forget about your troubles.
            </p>
          </div>
          <div className="flex basis-1/3 flex-col items-center text-center">
            <FaUtensils className="text-7xl text-color-1" />
            <h3 className="pt-5 text-[28px] text-color-6 sm:text-4xl">
              Healthy food
            </h3>
            <p className="pt-3 font-medium leading-6 text-color-6">
              We cook healthily and tasty.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-4 text-center sm:flex-row">
          <div className="mb-1 mt-7 basis-1/4">
            <div>
              <h3 className="px-1 text-[28px] leading-[1.1] text-color-1 sm:text-4xl">
                Healthy and delicious food
              </h3>
              <p className="text-color-10 mt-6 font-medium leading-6">
                We combine health with taste. We cook healthily, and all dishes
                on our menu are low in calories.
              </p>
            </div>
            <div className="mt-16 sm:mt-32">
              <h3 className="px-1 text-[28px] leading-[1.1] text-color-1 sm:text-4xl">
                Sugar-free sweet desserts
              </h3>
              <p className="text-color-10 mt-6 font-medium leading-6">
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
              className="w-full"
            />
          </div>
          <div className="mb-1 mt-7 basis-1/4">
            <div>
              <h3 className="px-1 text-[28px] leading-[1.1] text-color-1 sm:text-4xl">
                Aromatic coffee
              </h3>
              <p className="text-color-10 mt-6 font-medium leading-6">
                Coffee from freshly roasted and carefully selected beans tastes
                delicious every day. Come and try it!
              </p>
            </div>
            <div className="mt-16 sm:mt-32">
              <h3 className="px-1 text-[28px] leading-[1.1] text-color-1 sm:text-4xl">
                The power of freshness
              </h3>
              <p className="text-color-10 mt-6 font-medium leading-6">
                We carefully select our ingredients. We only order fresh and
                quality products from local suppliers, including vegetables and
                fruits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-4 py-16 sm:py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row">
          <div className="flex basis-1/2 flex-col items-center py-2 sm:items-start">
            <h4 className="mt-7 text-xl text-color-1 sm:text-3xl">
              Authentic fit food
            </h4>
            <h2 className="mt-11 text-3xl leading-[1.1] text-white sm:text-5xl">
              Avocado is our superhero!
            </h2>
            <p className="mt-6 font-medium leading-6 text-white">
              We focus on health and taste. In the heart of our kitchen, we put
              avocado, the healthiest fruit in the world, which is a real mine
              of vitamins and nutrients! All our dishes are created based on
              this beauty.
            </p>
            <button className="mx-auto my-2 mt-6 rounded-full border-2 border-color-1 px-8 py-5 font-inter text-lg text-color-1 duration-300">
              Order online
            </button>
          </div>
          <div className="flex basis-1/2 flex-col items-center">
            <img
              src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/person-1.jpg"
              alt="image"
              className="w-4/5 rounded-t-[200px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-color-9 py-8 sm:py-16">
        <div className="mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="basis-1/4 px-4">
            <img
              src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-3.jpg"
              alt="image"
              className="w-[400px] rounded-[150px]"
            />
          </div>
          <div className="basis-2/4 text-center">
            <h2 className="mt-7 px-8 text-3xl leading-[1.1] text-color-6 sm:text-5xl">
              How about healthy meal delivery service?
            </h2>
            <h4 className="mb-10 mt-9 px-1 text-xl leading-[1.1] text-color-6 sm:text-3xl">
              You can order a catering service from us. What does this mean? Why
              is it worth it? Every day, we will deliver your meals according to
              your diet and culinary preferences. Contact us for more details.
            </h4>
            <button className="my-2 rounded-full bg-color-0 px-8 py-5 font-inter text-lg text-white duration-300">
              Order online
            </button>
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
    </div>
  );
}

export default Home;
