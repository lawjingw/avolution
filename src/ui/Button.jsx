function Button({ number, isDisabled, onClick, children }) {
  return (
    <button
      className="relative flex items-center justify-center rounded-md bg-color-1 px-6 py-3 text-sm text-color-2 transition-all active:enabled:bg-opacity-50 active:enabled:text-black disabled:bg-opacity-50 md:rounded-full md:text-lg md:text-black md:hover:bg-opacity-60 md:active:outline md:active:outline-2 md:active:outline-blue-500"
      onClick={onClick}
      disabled={isDisabled}
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
