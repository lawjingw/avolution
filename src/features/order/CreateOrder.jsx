import { useForm } from "react-hook-form";
import RadioInput from "../../ui/RadioInput";
import FormRow from "../../ui/FormRow";
import { IoCardOutline, IoCashOutline } from "react-icons/io5";
import TextInput from "../../ui/TextInput";
import { useEffect } from "react";

function CreateOrder() {
  const {
    register,
    unregister,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const showAddress = watch("type", "delivery") === "delivery";
  useEffect(() => {
    if (!showAddress)
      unregister([
        "addressLineOne",
        "addressLineTwo",
        "city",
        "county",
        "country",
        "postcode",
      ]);
  }, [showAddress, unregister]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" w-[1100px]  bg-stone-100 px-4 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-6"
      >
        <div className="bg-white px-6 py-4">
          <h2 className="mb-3 text-lg font-semibold">Payment</h2>
          <div className="space-y-3">
            <RadioInput
              id="card"
              name="payment"
              label="Card (upon receipt)"
              isDefaultChecked={true}
              value="card"
              register={register("payment")}
              icon={
                <IoCardOutline className="ml-auto h-10 w-10 stroke-stone-500" />
              }
            />
            <RadioInput
              id="cash"
              name="payment"
              label="Cash"
              value="cash"
              register={register("payment")}
              icon={
                <IoCashOutline className="ml-auto h-10 w-10 stroke-stone-500" />
              }
            />
          </div>
          <h2 className="mb-3 mt-8 text-lg font-semibold">Order type</h2>
          <div className="space-y-3">
            <RadioInput
              id="delivery"
              name="type"
              label="Delivery"
              isDefaultChecked={true}
              value="delivery"
              register={register("type")}
            />
            <RadioInput
              id="pickup"
              name="type"
              label="Pickup"
              value="pickup"
              register={register("type")}
            />
          </div>
        </div>
        {showAddress && (
          <div className="bg-white px-6 py-4">
            <h2 className="mb-6 text-lg font-semibold">Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <FormRow lable="Address Line 1" isRequired={true} errors={errors}>
                <TextInput
                  id="addressLineOne"
                  name="addressLineOne"
                  errors={errors}
                  register={register("addressLineOne", {
                    required: "Address line 1 is required",
                    maxLength: {
                      value: 64,
                      message: "Field too long. Max length is: 64",
                    },
                  })}
                />
              </FormRow>
              <FormRow lable="Address Line 2" errors={errors}>
                <TextInput
                  id="addressLineTwo"
                  name="addressLineTwo"
                  errors={errors}
                  register={register("addressLineTwo", {
                    maxLength: {
                      value: 64,
                      message: "Field too long. Max length is: 64",
                    },
                  })}
                />
              </FormRow>
              <FormRow lable="City" isRequired={true} errors={errors}>
                <TextInput
                  id="city"
                  name="city"
                  errors={errors}
                  register={register("city", {
                    required: "City is required",
                    maxLength: {
                      value: 20,
                      message: "Field too long. Max length is: 20",
                    },
                  })}
                />
              </FormRow>
              <FormRow lable="County" errors={errors}>
                <TextInput
                  id="county"
                  name="county"
                  errors={errors}
                  register={register("county", {
                    maxLength: {
                      value: 20,
                      message: "Field too long. Max length is: 20",
                    },
                  })}
                />
              </FormRow>
              <FormRow lable="Country" errors={errors}>
                <input
                  type="text"
                  id="country"
                  name="country"
                  defaultValue="United Kingdom"
                  readOnly
                  className="rounded-sm border px-4 py-2 transition-shadow focus:shadow-[inset_0_1px_1px_rgba(0,0,0,.075),0_0_8px_rgba(102,175,233,.6)] focus:outline-none"
                />
              </FormRow>
              <FormRow lable="Postcode" isRequired={true} errors={errors}>
                <TextInput
                  id="postcode"
                  name="postcode"
                  errors={errors}
                  register={register("postcode", {
                    required: "Postcode is required",
                    maxLength: {
                      value: 10,
                      message: "Field too long. Max length is: 10",
                    },
                  })}
                />
              </FormRow>
            </div>
          </div>
        )}
        <div className="bg-white px-6 py-4">
          <h2 className="mb-4 text-lg font-semibold">Contact</h2>
          <div className="grid grid-cols-2 gap-4">
            <FormRow lable="First name" isRequired={true} errors={errors}>
              <TextInput
                id="firstName"
                name="firstName"
                errors={errors}
                register={register("firstName", {
                  required: "First name is required",
                  maxLength: {
                    value: 64,
                    message: "Field too long. Max length is: 64",
                  },
                })}
              />
            </FormRow>
            <FormRow lable="Last name" isRequired={true} errors={errors}>
              <TextInput
                id="lastName"
                name="lastName"
                errors={errors}
                register={register("lastName", {
                  required: "Last name is required",
                  maxLength: {
                    value: 64,
                    message: "Field too long. Max length is: 64",
                  },
                })}
              />
            </FormRow>
            <FormRow lable="Phone" isRequired={true} errors={errors}>
              <TextInput
                id="phone"
                name="phone"
                errors={errors}
                register={register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/,
                    message: "Please provide a valid phone number",
                  },
                })}
              />
            </FormRow>
            <FormRow lable="Email" isRequired={true} errors={errors}>
              <TextInput
                id="email"
                name="email"
                errors={errors}
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Please provide a valid email",
                  },
                })}
              />
            </FormRow>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
