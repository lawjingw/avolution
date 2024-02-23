import { useForm } from "react-hook-form";
import RadioInput from "../../ui/RadioInput";
import { IoCardOutline, IoCashOutline } from "react-icons/io5";

function CreateOrder() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex w-[1100px] flex-col justify-between gap-6 bg-stone-100 px-6 py-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 className="mb-3 text-lg font-semibold">Payment</h2>
          <div className="space-y-3">
            <RadioInput
              id="card"
              name="payment"
              label="Card (upon receipt)"
              isChecked={true}
              icon={
                <IoCardOutline className="ml-auto h-10 w-10 stroke-stone-500" />
              }
            />
            <RadioInput
              id="cash"
              name="payment"
              label="Cash"
              icon={
                <IoCashOutline className="ml-auto h-10 w-10 stroke-stone-500" />
              }
            />
          </div>
          <h2 className="mb-3 text-lg font-semibold">Order type</h2>
          <div className="space-y-3">
            <RadioInput
              id="delivery"
              name="type"
              label="Delivery"
              isChecked={true}
            />
            <RadioInput id="pickup" name="type" label="Pickup" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Address</h2>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Contact</h2>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
