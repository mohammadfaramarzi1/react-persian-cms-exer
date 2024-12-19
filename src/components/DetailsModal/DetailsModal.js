import ReactDOM from "react-dom"
import { useEffect } from "react";

import "./DetailsModal.css";

function DetailsModal({ closeDetailsModal }) {
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
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>لپتاپ</td>
              <td>12000000</td>
              <td>91%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,
    document.querySelector("#modals-parent")
  );
}

export default DetailsModal;
