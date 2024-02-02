import { cloneElement, useContext, useState } from "react";
import { ModalContext } from "./ModalContext";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  //const open = setOpenName;
  const open = () => {
    console.log("open");
  };
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens, children }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ name, children }) {
  const { openName, close } = useContext(ModalContext);

  if (openName !== name) return null;

  return createPortal(
    <div>
      <button onClick={close}>
        <HiXMark />
      </button>
      <div>{children}</div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
