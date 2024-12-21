import { useEffect, useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";

import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import Errorbox from "../Errorbox/Errorbox";

import "./ProductsTable.css";

function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [productID, setProductsID] = useState(null);
  console.log(products);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  };

  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };

  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllProducts();
      });
  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const updateProductInfo = (event) => {
    event.preventDefault();
    console.log("Update");
    setIsShowEditModal(false);
  };

  if (!products.length) return <Errorbox msg="هیچ محصولی یافت نشد..." />;

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
          {products.map((product) => (
            <tr className="products-table-body-tr" key={product.id}>
              <td>
                <img
                  src={product.img}
                  alt="product cover"
                  className="products-table-img"
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price.toLocaleString()} تومان</td>
              <td>{product.count}</td>
              <td>
                <button
                  className="products-table-btn"
                  onClick={() => setIsShowDetailsModal(true)}
                >
                  جزییات
                </button>
                <button
                  className="products-table-btn"
                  onClick={() => {
                    setIsShowDeleteModal(true);
                    setProductsID(product.id);
                  }}
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
          ))}
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
