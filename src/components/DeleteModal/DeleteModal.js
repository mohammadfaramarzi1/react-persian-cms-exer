import "./DeleteModal.css"

function DeleteModal() {
  return (
    <div className="modal-parent active">
        <div className="delete-modal">
            <h1>آیا از حذف اطمینان دارید؟</h1>
            <div className="delete-modal-btns">
                <button className="delete-btn delete-modal-accept-btn">بله</button>
                <button className="delete-btn delete-modal-reject-btn">خیر</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal