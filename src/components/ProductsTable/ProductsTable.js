import { useState } from "react";

import DeleteModal from "../DeleteModal/DeleteModal";

import "./ProductsTable.css";

function ProductsTable() {
  const [isShowModal, setIsShowModal] = useState(false);

  const deleteModalCancelAction = () => {
    setIsShowModal(false);
  };

  const deleteModalSubmitAction = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>نام</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          <tr className="products-table-body-tr">
            <td>
              <img
                src="/images/oil.jpeg"
                alt="product cover"
                className="products-table-img"
              />
            </td>
            <td>روغن سرخ کردنی</td>
            <td>92000 تومان</td>
            <td>82</td>
            <td>
              <button className="products-table-btn">جزییات</button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowModal(true)}
              >
                حذف
              </button>
              <button className="products-table-btn">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowModal && (
        <DeleteModal
          isShowModal={isShowModal}
          deleteModalCancelAction={deleteModalCancelAction}
          deleteModalSubmitAction={deleteModalSubmitAction}
        />
      )}
    </>
  );
}

export default ProductsTable;
