import ContactForm from "./ContactForm";

function ContactSectionOne() {
  return (
    <section className="py-16 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-8 px-4 sm:flex-row">
        <div className="flex basis-1/2 flex-col items-center">
          <img
            src="https://nvapczplomgjxplmveic.supabase.co/storage/v1/object/public/assets/vegan-9.jpg"
            alt="image"
            className="w-4/5 rounded-[90px]"
          />
        </div>
        <div className="basis-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSectionOne;
