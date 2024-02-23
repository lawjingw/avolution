function RadioInput({ id, name, label, icon, isChecked = false }) {
  return (
    <label
      className="has-[:checked]:border-color-1 has-[:checked]:border-2 flex cursor-pointer items-center justify-start rounded-md border-2 px-4 py-3"
      htmlFor={id}
    >
      <input
        className="h-3 w-3 cursor-pointer appearance-none rounded-full outline outline-1 outline-offset-[3px] outline-gray-300 checked:bg-color-1 checked:outline-color-1"
        type="radio"
        id={id}
        name={name}
        defaultChecked={isChecked}
      />
      <p className="ml-4">{label}</p>
      {icon}
    </label>
  );
}

export default RadioInput;
