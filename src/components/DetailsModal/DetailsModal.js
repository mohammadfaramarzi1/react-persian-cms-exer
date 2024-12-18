import "./DetailsModal.css";

function DetailsModal() {
  return <div className="details-modal modal-parent active">
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
  </div>;
}

export default DetailsModal;
