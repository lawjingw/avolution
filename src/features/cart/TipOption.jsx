function TipOption({ tip, isActive, handleSetTip }) {
  const handleClick = () => {
    handleSetTip(tip);
  };

  return (
    <li
      className={`grow py-1 text-center ${
        isActive ? "bg-gray-900 text-white" : ""
      }`}
    >
      <button type="button" onClick={handleClick} className="w-full">
        {tip * 100}%
      </button>
    </li>
  );
}

export default TipOption;
