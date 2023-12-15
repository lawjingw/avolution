import { Link } from "react-router-dom";

function Button({ type, to, children }) {
  const styles = {
    nav: "text-lg font-bold py-3.5 px-5 rounded-full duration-300 hover:bg-color-3",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
