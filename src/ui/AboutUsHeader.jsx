function AboutUsHeader() {
  return (
    <header className="bg-color-2 pb-16 pt-32 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div className="flex flex-col items-center px-1 md:basis-1/2 md:items-start">
          <h1 className="mt-7 text-5xl leading-[1.1] text-color-1 lg:text-7xl">
            Get to know us better
          </h1>
          <h4 className="mb-4 mt-9 text-xl leading-[1.1] text-color-6 lg:text-3xl">
            Visit us and try our alway-delicious avocado!
          </h4>
        </div>
      </div>
    </header>
  );
}

export default AboutUsHeader;
