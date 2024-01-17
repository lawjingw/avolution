import ContactForm from "./ContactForm";

function ContactSectionOne() {
  return (
    <section className="py-16 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch justify-between gap-8 px-4 sm:flex-row sm:items-center">
        <div className="flex flex-col items-center sm:basis-1/2">
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-9.jpg"
            alt="image"
            className="w-full rounded-[90px] sm:w-4/5"
          />
        </div>
        <div className="sm:basis-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSectionOne;
