import { ErrorMessage } from "@hookform/error-message";

function FormRow({ lable, errors, children, className = "" }) {
  return (
    <div className={`mb-4 flex flex-col gap-1 ${className}`}>
      <label htmlFor={children.props.id}>{lable}</label>
      {children}
      {errors && (
        <ErrorMessage
          errors={errors}
          name={children.props.id}
          render={({ message }) => (
            <label className="text-sm text-red-700">{message}</label>
          )}
        />
      )}
    </div>
  );
}

export default FormRow;
