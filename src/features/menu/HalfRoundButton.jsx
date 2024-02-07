function HalfRoundButton({ side, disabled, onClick, children }) {
  const roundedStyle = {
    l: "rounded-l-full",
    r: "rounded-r-full",
  };

  const classStyle = `inline-block bg-stone-200 px-3 py-0.5 text-sm font-semibold text-stone-800 transition-colors duration-300 ${roundedStyle[side]} hover:bg-gray-950 hover:text-white disabled:cursor-not-allowed`;

  return (
    <button disabled={disabled} onClick={onClick} className={classStyle}>
      {children}
    </button>
  );
}

export default HalfRoundButton;
