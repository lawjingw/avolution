function Button({ onClick, children }) {
  return (
    <button
      className="rounded-full bg-color-1 py-3 hover:bg-opacity-60"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
