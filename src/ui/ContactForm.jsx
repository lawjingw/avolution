import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import { useEffect, useState } from "react";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

function ContactForm() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm();
  const [isNotifying, setIsNotifying] = useState(false);

  const onSubmit = () =>
    console.log("Thanks! We will contact you as soon as possible.");

  useEffect(() => {
    if (isSubmitSuccessful) {
      setIsNotifying(true);
      reset({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    }
    setTimeout(() => setIsNotifying(false), 3000);
  }, [setIsNotifying, reset, isSubmitSuccessful]);
  return (
    <>
      {isNotifying && (
        <p className="mb-2 rounded-full bg-green-100 px-3 py-2 text-color-0">
          Thanks! We will contact you as soon as possible.
        </p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid auto-cols-max grid-cols-1 gap-4 md:grid-cols-2 md:gap-8"
      >
        <FormRow lable="First Name" errors={errors}>
          <TextInput
            id="firstName"
            name="firstName"
            style="round"
            errors={errors}
            register={register("firstName", {
              required: "Name is required",
              maxLength: 20,
            })}
          />
        </FormRow>
        <FormRow lable="Last Name" errors={errors}>
          <TextInput
            type="text"
            id="lastName"
            name="lastName"
            style="round"
            errors={errors}
            register={register("lastName", {
              required: "Surname is required",
              maxLength: 20,
            })}
          />
        </FormRow>
        <FormRow lable="Phone" errors={errors}>
          <TextInput
            type="tel"
            id="phone"
            name="phone"
            style="round"
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
          <TextInput
            type="text"
            id="email"
            name="email"
            style="round"
            errors={errors}
            register={register("email", {
              required: "Email is required",
            })}
          />
        </FormRow>
        <FormRow lable="Message" className="md:col-span-2" errors={errors}>
          <TextAreaInput
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
    </>
  );
}

export default ContactForm;
