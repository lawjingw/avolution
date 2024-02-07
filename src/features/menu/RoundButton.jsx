function RoundButton({ disabled, onClick, children }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="inline-block rounded-full bg-stone-200 px-2 py-0.5 text-sm font-semibold text-stone-800 transition-colors duration-300 hover:bg-gray-950 hover:text-white disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default RoundButton;
