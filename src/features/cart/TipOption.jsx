function TipOption({ tip, isActive, handleSetTip }) {
  const handleClick = () => {
    handleSetTip(tip);
  };

  return (
    <li className={`grow py-1 text-center ${isActive ? "bg-stone-200" : ""}`}>
      <button onClick={handleClick}>{tip * 100}%</button>
    </li>
  );
}

export default TipOption;
