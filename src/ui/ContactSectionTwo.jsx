import {
  HiOutlineEnvelope,
  HiOutlineMap,
  HiOutlinePhone,
} from "react-icons/hi2";
import { useInView } from "react-intersection-observer";

function ContactSectionTwo() {
  const { ref: blockRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="bg-color-4 py-8 md:py-16">
      <div
        ref={blockRef}
        className={`mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:opacity-0 md:transition-opacity md:duration-500 md:ease-in ${
          inView ? "md:!opacity-100" : ""
        }`}
      >
        <div>
          <HiOutlineMap className="h-12 w-12 text-color-1" />
          <p className="mt-3 text-white">Road, Sam Clark Way</p>
          <p className="text-white">Bedford MK42 7GB</p>
        </div>
        <div>
          <HiOutlineEnvelope className="h-12 w-12 text-color-1" />
          <p className="mt-3 font-bold text-white">Email:</p>
          <p className="mt-6 text-white">contact@avolution.com</p>
          <p className="text-white">Everday: 10AM - 6PM</p>
        </div>
        <div>
          <HiOutlinePhone className="h-12 w-12 text-color-1" />
          <p className="mt-3 font-bold text-white">Phone:</p>
          <p className="mt-6 text-white">+44 8888 888888</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionTwo;
