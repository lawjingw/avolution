import { useForm } from "react-hook-form";
import RadioInput from "../../ui/RadioInput";
import FormRow from "../../ui/FormRow";
import { IoCardOutline, IoCashOutline } from "react-icons/io5";
import TextInput from "../../ui/TextInput";
import { useFetcher } from "react-router-dom";
import CartItems from "../cart/CartItems";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectTotlePrice } from "../cart/cartSlice";
import Order from "./Order";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaLocationCrosshairs } from "react-icons/fa6";

function CreateOrder({ cart }) {
  const formFetcher = useFetcher();
  const addressFetcher = useFetcher();
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => selectTotlePrice(state));
  const tip = useSelector((state) => state.cart.tip);
  const finalPrice = totalPrice + totalPrice * tip;
  const {
    register,
    unregister,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
    setValue,
  } = useForm();

  const isSubmitting = formFetcher.state === "submitting";
  const isLocating = addressFetcher.state === "submitting";

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
    if (cart.length) {
      formFetcher.submit(
        {
          ...data,
          cart: JSON.stringify(cart),
          tip: tip,
          totalPrice: totalPrice,
          finalPrice: finalPrice,
        },
        { method: "post" },
      );
      dispatch(clearCart());
      reset();
    } else {
      toast.error("Cart is empty. Add menu items.");
    }
  };

  const getLocation = () => {
    addressFetcher.submit(
      {
        intent: "address",
      },
      { method: "post" },
    );
  };

  useEffect(() => {
    if (addressFetcher.data) {
      setValue("city", addressFetcher.data.city);
      setValue("county", addressFetcher.data.county);
      setValue("postcode", addressFetcher.data.postcode);
    }
  }, [addressFetcher.data]);

  if (formFetcher.data) return <Order order={formFetcher.data} />;

  return (
    <div className="bg-stone-100 px-4 py-5 sm:w-[1100px] sm:py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-6 sm:flex-row sm:gap-12"
      >
        <div className="basis-full space-y-6">
          <div className="row-span-2 bg-white px-6 py-4">
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
              <div className="flex justify-between">
                <h2 className="mb-6 text-lg font-semibold">Address</h2>
                <a
                  href="#"
                  onClick={getLocation}
                  disabled={isLocating}
                  className="flex items-center text-color-1 transition-colors hover:text-black"
                >
                  <FaLocationCrosshairs className="mr-1 inline-block" />
                  Use my location
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormRow
                  lable="Address Line 1"
                  isRequired={true}
                  errors={errors}
                  className="col-span-2 sm:col-auto"
                >
                  <TextInput
                    id="addressLineOne"
                    name="addressLineOne"
                    isDisabled={isLocating}
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
                <FormRow
                  lable="Address Line 2"
                  errors={errors}
                  className="col-span-2 sm:col-auto"
                >
                  <TextInput
                    id="addressLineTwo"
                    name="addressLineTwo"
                    isDisabled={isLocating}
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
                    isDisabled={isLocating}
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
                    isDisabled={isLocating}
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
                  <TextInput
                    id="country"
                    name="country"
                    isDisabled={isLocating}
                    isReadOnly={true}
                    defaultValue="United Kingdom"
                    register={register("country")}
                  />
                </FormRow>
                <FormRow lable="Postcode" isRequired={true} errors={errors}>
                  <TextInput
                    id="postcode"
                    name="postcode"
                    isDisabled={isLocating}
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              <input
                type="text"
                name="intent"
                value="create"
                hidden
                {...register("intent")}
              />
            </div>
          </div>
        </div>
        <div className="basis-[30rem] space-y-6">
          {isSubmitting ? (
            <div className="flex items-center justify-center bg-white py-8">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="bg-white px-6 py-4">
              <h2 className="text-lg font-semibold">Your order</h2>
              {!cart.length ? <EmptyCart /> : <CartItems cart={cart} />}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-fit w-full rounded-md bg-color-1 py-3 text-lg text-color-2 duration-300 hover:bg-opacity-50 hover:text-black"
          >
            {isSubmitting ? "Sending order..." : "Create order"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
