import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // equivalent to componentWillUnmount
    return () => modalRoot.removeChild(elRef.current);
  }, []); // [] means run this only once

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
