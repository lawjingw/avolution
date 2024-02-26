import { ErrorMessage } from "@hookform/error-message";

function FormRow({
  lable,
  errors,
  children,
  isRequired = false,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label
        htmlFor={children.props.id}
        className={`${
          isRequired ? "after:ml-1 after:text-red-500 after:content-['*']" : ""
        }`}
      >
        {lable}
      </label>
      {children}
      {errors && (
        <ErrorMessage
          errors={errors}
          name={children.props.id}
          render={({ message }) => (
            <p className="text-sm text-red-700">{message}</p>
          )}
        />
      )}
    </div>
  );
}

export default FormRow;
