import { cloneElement, useContext, useState } from "react";
import { ModalContext } from "./ModalContext";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;

  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens, renderItem }) {
  const { open } = useContext(ModalContext);

  return renderItem(() => open(opens));
}

function Window({ name, children }) {
  const { openName, close } = useContext(ModalContext);
  const modalRef = useOutsideClick(close);

  if (openName !== name) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-10 h-screen w-full bg-black opacity-75 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 opacity-100 shadow-lg"
      >
        <button onClick={close} className="absolute right-7 top-5">
          <HiXMark />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
