function Button({ onClick, children }) {
  return (
    <button
      className="rounded-full bg-color-1 px-6 py-3 text-lg hover:bg-opacity-60"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
