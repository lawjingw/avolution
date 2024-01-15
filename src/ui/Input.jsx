function Input({ type, id, name, errors, register }) {
  const isError = (id) => {
    if (errors) return id in errors;
  };

  if (type === "textarea")
    return (
      <textarea
        id={id}
        name={name}
        rows="5"
        {...register}
        className={`focus:shadow-input rounded-3xl border border-solid px-3 py-2 transition-colors focus:border-blue-400 focus:outline-none ${
          isError(id)
            ? "focus:shadow-input-error border-red-700 focus:border-red-700"
            : "focus:shadow-input"
        }`}
      />
    );

  return (
    <input
      type={type}
      id={id}
      name={name}
      {...register}
      className={`transform-colors rounded-full border border-solid px-3 py-2 focus:border-blue-400 focus:outline-none ${
        isError(id)
          ? "focus:shadow-input-error border-red-700 focus:border-red-700"
          : "focus:shadow-input"
      }`}
    />
  );
}

export default Input;
