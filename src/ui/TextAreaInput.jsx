function TextAreaInput({ id, name, errors, register }) {
  const baseSytle =
    "rounded-3xl border border-solid px-3 py-2 transition-shadow focus:outline-none";

  const isError = (id) => {
    if (errors) return id in errors;
  };
  const errorStyle = isError(id)
    ? "border-red-700 focus:shadow-input-error"
    : "focus:shadow-input";

  const className = `${baseSytle} ${errorStyle}`;

  return (
    <textarea
      id={id}
      name={name}
      rows="5"
      {...register}
      className={className}
    />
  );
}

export default TextAreaInput;
