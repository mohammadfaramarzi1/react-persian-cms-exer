import ReactDOM from "react-dom"
import { useEffect } from "react";

import "./DetailsModal.css";

function DetailsModal({ closeDetailsModal, children }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.key === "Escape") {
        closeDetailsModal();
      }
    };
    window.addEventListener("keydown", checkKey);

    return () => {
      window.removeEventListener("keydown", checkKey);
    };
  }, []);
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="details-modal">
        {children}
      </div>
    </div>,
    document.querySelector("#modals-parent")
  );
}

export default DetailsModal;
