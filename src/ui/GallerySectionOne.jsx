const photos = [
  {
    name: "vegan-1",
    src: "https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-6.jpg",
  },
  {
    name: "vegan-2",
    src: "https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-7.jpg",
  },
  {
    name: "vegan-3",
    src: "https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-8.jpg",
  },
  {
    name: "vegan-4",
    src: "https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-1.jpg",
  },
  {
    name: "vegan-5",
    src: "https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-3.jpg",
  },
  {
    name: "vegan-6",
    src: "https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-4.jpg",
  },
];

function GallerySectionOne() {
  return (
    <section className="py-16 sm:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4">
        {photos.map((photo) => (
          <img
            src={photo.src}
            alt={photo.name}
            className="h-[240px] w-full object-cover md:h-[540px] lg:h-[740px]"
            key={photo.name}
          />
        ))}
      </div>
    </section>
  );
}

export default GallerySectionOne;
