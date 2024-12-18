import ReactDOM from "react-dom";

import "./DeleteModal.css";

function DeleteModal({
  deleteModalCancelAction,
  deleteModalSubmitAction,
}) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>آیا از حذف اطمینان دارید؟</h1>
        <div className="delete-modal-btns">
          <button
            className="delete-btn delete-modal-accept-btn"
            onClick={deleteModalSubmitAction}
          >
            بله
          </button>
          <button
            className="delete-btn delete-modal-reject-btn"
            onClick={deleteModalCancelAction}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#modals-parent")
  );
}

export default DeleteModal;
