import { useContext, useState } from "react";
import { ModalContext } from "./ModalContext";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useTransition, animated } from "@react-spring/web";

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = (name) => {
    setOpenName(name);
    document.body.classList.add("overflow-hidden");
  };

  const close = () => {
    setOpenName("");
    document.body.classList.remove("overflow-hidden");
  };

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
  const isVisible = openName === name;
  const transitions = useTransition(isVisible, {
    from: { x: "-50%", y: "-100%", opacity: 0 },
    enter: { y: "-50%", opacity: 1 },
    leave: { y: "-100%", opacity: 0 },
  });

  return createPortal(
    transitions((style, isVisible) =>
      isVisible ? (
        <div className="fixed inset-0 z-50 h-screen w-full overflow-scroll bg-black/75 backdrop-blur-sm">
          <animated.div
            style={style}
            ref={modalRef}
            className="fixed left-1/2 top-1/2 max-h-screen bg-white shadow-lg"
          >
            <button onClick={close} className="absolute right-3 top-3">
              <HiXMark className="stroke-1 text-lg" />
            </button>
            {children}
          </animated.div>
        </div>
      ) : (
        ""
      ),
    ),
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
