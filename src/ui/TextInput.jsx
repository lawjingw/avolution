function TextInput({ style = "normal", id, name, errors, register }) {
  const baseSytle =
    "border border-solid px-4 py-2 transition-shadow focus:outline-none";

  const inputStyles = {
    normal: "rounded-md",
    round: "rounded-full",
  };

  const errorStyle =
    errors && id in errors
      ? "border-red-700 focus:shadow-input-error"
      : "focus:shadow-input";

  const className = `${baseSytle} ${inputStyles[style]} ${errorStyle}`;

  return (
    <input
      type="text"
      id={id}
      name={name}
      {...register}
      className={className}
    />
  );
}

export default TextInput;
