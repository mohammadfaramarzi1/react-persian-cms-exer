import "./EditModal.css";

function EditModal({ children, onClose, onSubmit }) {
  return (
    <div className="modal-parent active">
      <form className="edit-modal-form">
        <h1>اطلاعات جدید را وارد نمایید</h1>
        {children}
        <button className="edit-form-submit">ثبت اطلاعات جدید</button>
      </form>
    </div>
  );
}

export default EditModal;
