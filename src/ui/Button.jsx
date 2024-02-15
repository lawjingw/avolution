function Button({ number, onClick, children }) {
  return (
    <button
      className="relative rounded-full bg-color-1 px-6 py-3 text-lg hover:bg-opacity-60 active:outline active:outline-2 active:outline-blue-500"
      onClick={onClick}
    >
      {number > 0 && (
        <span className="absolute -right-1 -top-1 z-10 inline-block h-6 w-6 rounded-full bg-black py-1 align-super text-xs text-white">
          {number}
        </span>
      )}
      {children}
    </button>
  );
}

export default Button;
