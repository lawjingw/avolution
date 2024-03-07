import { useContext, useEffect, useState } from "react";
import { ModalContext } from "./ModalContext";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useTransition, animated } from "@react-spring/web";

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const open = (name) => {
    setOpenName(name);
  };

  const close = () => {
    setOpenName("");
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
  const transition = useTransition(isVisible, {
    from: () => {
      if (window.innerWidth > 640) return { x: "-50%", y: "-100%", opacity: 0 };
      else return { y: "-20%", opacity: 0 };
    },
    enter: () => {
      if (window.innerWidth > 640) return { y: "-50%", opacity: 1 };
      else return { y: "0", opacity: 1 };
    },
    leave: () => {
      if (window.innerWidth > 640) return { y: "-100%", opacity: 0 };
      else return { y: "-20%", opacity: 0 };
    },
  });

  useEffect(() => {
    isVisible && document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVisible]);

  return createPortal(
    transition((style, isVisible) =>
      isVisible ? (
        <div className="fixed inset-0 z-50 h-screen w-full overflow-scroll bg-black/75 backdrop-blur-sm">
          <animated.div
            style={style}
            ref={modalRef}
            className="fixed top-10 max-h-screen w-full bg-white shadow-lg sm:left-1/2 sm:top-1/2 sm:mx-0 sm:w-auto"
          >
            <button
              onClick={close}
              className="absolute -top-7 right-1 sm:right-3 sm:top-3"
            >
              <HiXMark className="stroke-1 text-2xl text-white sm:text-black" />
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
