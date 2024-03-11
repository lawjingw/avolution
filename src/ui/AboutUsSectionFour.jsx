function AboutUsSectionFour() {
  return (
    <section className="relative">
      <video
        className="absolute -z-10 h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/tofu.mp4?t=2024-01-10T16%3A45%3A32.256Z"
          type="video/mp4"
        />
      </video>
      <div className="bg-gray-800 bg-opacity-60">
        <div className="mx-auto flex max-w-lg flex-col items-center py-36 text-center md:py-44">
          <h2 className="mb-6 text-3xl font-bold leading-[1.1] lg:text-5xl">
            <span className="text-color-1">AVO</span>LUTION
          </h2>
          <h3 className="mt-4 text-[28px] text-color-1 lg:text-4xl">
            Use the order form and choose what you fancy
          </h3>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSectionFour;
