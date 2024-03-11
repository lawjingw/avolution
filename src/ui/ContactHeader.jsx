function ContactHeader() {
  return (
    <header className="bg-color-2 pb-16 pt-32 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div className="flex flex-col items-center px-1 md:basis-1/2 md:items-start">
          <h1 className="mt-7 text-5xl leading-[1.1] text-color-1 lg:text-7xl">
            Feel free to contact us
          </h1>
          <h4 className="mb-4 mt-9 text-xl leading-[1.1] text-color-6 lg:text-3xl">
            We are open from Monday to Friday from 10:00 a.m. to 8:00 p.m. You
            can also place an order online and contact us by phone.
          </h4>
        </div>
      </div>
    </header>
  );
}

export default ContactHeader;
