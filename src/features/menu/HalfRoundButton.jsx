function HalfRoundButton({ side, disabled, onClick, children }) {
  const buttonRoundedStyle = {
    l: "rounded-l-[45px] rounded-r-2xl",
    r: "rounded-r-[45px] rounded-l-2xl",
  };
  const spanRoundedStyle = {
    l: "rounded-l-full",
    r: "rounded-r-full",
  };

  const buttonStyle = `${buttonRoundedStyle[side]} inline-block px-3 py-0.5 h-full text-sm font-semibold text-stone-800 tansition duration-200 disabled:cursor-not-allowed border border-transparent outline outline-transparent outline-2 active:border-white active:outline-blue-500 active:-outline-offset-4`;
  const spanStyle = `${spanRoundedStyle[side]}  inline-block border border-stone-300 tansition duration-300 active:bg-stone-200 hover:bg-stone-200`;

  return (
    <span className={spanStyle}>
      <button disabled={disabled} onClick={onClick} className={buttonStyle}>
        {children}
      </button>
    </span>
  );
}

export default HalfRoundButton;
