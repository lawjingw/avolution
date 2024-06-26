function OrderOnlineHeader() {
  return (
    <header className="pb-16 pt-32 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div className="flex flex-col items-center px-1 md:basis-1/2 md:items-start">
          <h1 className="mt-7 text-5xl leading-[1.1] text-color-1 lg:text-7xl">
            Our menu
          </h1>
          <h4 className="mb-4 mt-9 text-center text-xl leading-[1.1] text-color-6 md:text-start lg:text-3xl">
            See our offer with door-to-door delivery
          </h4>
        </div>
      </div>
    </header>
  );
}

export default OrderOnlineHeader;
