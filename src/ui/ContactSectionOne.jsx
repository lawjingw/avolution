import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import Input from "./Input";

function ContactSectionOne() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-8"
          >
            <FormRow lable="First Name" errors={errors}>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                errors={errors}
                register={register("firstName", {
                  required: "Name is required",
                  maxLength: 20,
                })}
              />
            </FormRow>
            <FormRow lable="Last Name" errors={errors}>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                errors={errors}
                register={register("lastName", {
                  required: "Surname is required",
                  maxLength: 20,
                })}
              />
            </FormRow>
            <FormRow lable="Phone" errors={errors}>
              <Input
                type="tel"
                id="phone"
                name="phone"
                errors={errors}
                register={register("phone", {
                  maxLength: 16,
                  pattern: {
                    value: /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/,
                    message: "Please provide valid phone number",
                  },
                })}
              />
            </FormRow>
            <FormRow lable="Email" errors={errors}>
              <Input
                type="text"
                id="email"
                name="email"
                errors={errors}
                register={register("email", {
                  required: "Email is required",
                })}
              />
            </FormRow>
            <FormRow lable="Message" className="col-span-2" errors={errors}>
              <Input
                type="textarea"
                id="message"
                name="message"
                errors={errors}
                register={register("message", {
                  required: "Message is required",
                })}
              />
            </FormRow>
            <div>
              <button className="rounded-full bg-green-400 px-4 py-3 font-inter text-lg outline-none transition-all focus:border focus:outline-2 focus:outline-offset-0 focus:outline-blue-600">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionOne;
