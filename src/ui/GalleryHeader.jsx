function GalleryHeader() {
  return (
    <header className="bg-color-2 pb-16 pt-32 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row">
        <div className="flex flex-col items-center px-1 sm:basis-1/2 sm:items-start">
          <h1 className="mt-7 text-5xl leading-[1.1] text-color-1 lg:text-7xl">
            Our photo gallery
          </h1>
          <h4 className="mb-4 mt-9 text-xl leading-[1.1] text-color-6 lg:text-3xl">
            Healthy, colorful, and avocado! Check out the gallery of our
            stunning dishes!
          </h4>
        </div>
      </div>
    </header>
  );
}

export default GalleryHeader;
