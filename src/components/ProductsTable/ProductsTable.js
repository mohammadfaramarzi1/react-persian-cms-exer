import { useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";

import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";

import "./ProductsTable.css";

function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };

  const deleteModalSubmitAction = () => {
    setIsShowDeleteModal(false);
  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const updateProductInfo = (event) => {
    event.preventDefault();
    console.log("Update");
    setIsShowEditModal(false);
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
              <button
                className="products-table-btn"
                onClick={() => setIsShowDetailsModal(true)}
              >
                جزییات
              </button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowDeleteModal(true)}
              >
                حذف
              </button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowEditModal(true)}
              >
                ویرایش
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowDeleteModal && (
        <DeleteModal
          deleteModalCancelAction={deleteModalCancelAction}
          deleteModalSubmitAction={deleteModalSubmitAction}
        />
      )}
      {isShowDetailsModal && (
        <DetailsModal closeDetailsModal={closeDetailsModal} />
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfo}
        >
          {/* {children} */}

          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="نام جدید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="نام جدید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="نام جدید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="نام جدید"
              className="edit-product-input"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}

export default ProductsTable;
