function Button({ children }) {
  return (
    <button className="rounded-full bg-color-1 py-3 hover:bg-opacity-60">
      {children}
    </button>
  );
}

export default Button;
