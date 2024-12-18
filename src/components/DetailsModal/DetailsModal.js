import "./DetailsModal.css";

function DetailsModal() {
  return (
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
    </div>
  );
}

export default DetailsModal;
