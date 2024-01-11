function AboutUsSectionOne() {
  return (
    <section className="py-16 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row">
        <div className="flex basis-1/2 flex-col items-center py-2 sm:items-start">
          <h2 className="mb-6 px-8 text-center text-3xl leading-[1.1] text-color-6 sm:px-0 sm:text-start lg:text-5xl">
            Healthy and colorful salads{" "}
            <span className="text-color-1">every day!</span>
          </h2>
          <p className="mb-10 font-medium leading-6 text-color-6">
            Looking for something healthy, delicious, and non-caloric? We
            introduce you to the hero of the day! There is always a different
            salad waiting for you in our restaurant – starring avocado, of
            course. Visit and check it out!
          </p>
        </div>
        <div className="flex basis-1/2 flex-col items-center">
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-5.jpg"
            alt="image"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUsSectionOne;
