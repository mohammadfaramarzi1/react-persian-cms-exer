import { useEffect, useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import Errorbox from "../Errorbox/Errorbox";

import "./ProductsTable.css";

function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productID, setProductID] = useState(null);
  const [mainProduct, setMainProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    title: "",
    price: "",
    count: "",
    img: "",
    popularity: "",
    sale: "",
    colors: "",
  });

  console.log(editedProduct);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  const deleteModalCancelAction = () => {
    console.log("مدال کنسل شد");
    setIsShowDeleteModal(false);
  };

  const deleteModalSubmitAction = () => {
    console.log("مدال تایید شد");
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllProducts();
        toast("محصول مورد نظر با موفقیت حذف شد", {
          type: "success",
          position: "top-right",
        });
      })
      .catch((err) => {
        toast("محصول مورد نظر با موفقیت حذف نشد", {
          type: "error",
          position: "top-right",
        });
      });
  };

  const closeDetailsmodal = () => {
    setIsShowDetailsModal(false);
    console.log("مدال جزییات بسته شد");
  };

  const updateProductInfos = (event) => {
    event.preventDefault();
    console.log("محصول ویرایش شد");
    const productNewInfos = {
      title: editedProduct.title,
      price: editedProduct.price,
      count: editedProduct.count,
      img: editedProduct.img,
      popularity: editedProduct.popularity,
      sale: editedProduct.sale,
      colors: editedProduct.colors,
    };
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productNewInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowEditModal(false);
        toast("محصول مورد نظر با موفقیت ویرایش شد", {
          position: "top-right",
          type: "success",
        });
        getAllProducts();
      })
      .catch((err) => {
        setIsShowEditModal(false);
        toast("محصول مورد نظر با موفقیت ویرایش نشد", {
          position: "top-right",
          type: "error",
        });
      });
  };

  const editProductHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditedProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <ToastContainer />
      {allProducts.length ? (
        <table className="products-table">
          <thead>
            <tr className="products-table-heading-tr">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>

          <tbody>
            {allProducts.map((product) => (
              <tr key={product.id} className="products-table-tr">
                <td>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="products-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price.toLocaleString()} تومان</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDetailsModal(true);
                      setMainProduct(product);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setProductID(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setProductID(product.id);
                      setEditedProduct({
                        title: product.title,
                        price: product.price,
                        count: product.count,
                        img: product.img,
                        popularity: product.popularity,
                        sale: product.sale,
                        colors: product.colors,
                      });
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ محصولی یافت نشد" />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          deleteModalSubmitAction={deleteModalSubmitAction}
          deleteModalCancelAction={deleteModalCancelAction}
        />
      )}
      {isShowDetailsModal && (
        <DetailsModal closeDetailsModal={closeDetailsmodal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگ بندی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainProduct.popularity} %</td>
                <td>{mainProduct.sale.toLocaleString()}</td>
                <td>{mainProduct.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
              value={editedProduct.title}
              name="title"
              onChange={(e) => editProductHandler(e)}
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="مبلغ جدید را وارد کنید"
              className="edit-product-input"
              value={editedProduct.price}
              name="price"
              onChange={(e) => editProductHandler(e)}
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="موجودی جدید را وارد کنید"
              className="edit-product-input"
              value={editedProduct.count}
              name="count"
              onChange={(e) => editProductHandler(e)}
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="میزان محبوبیت جدید را وارد کنید"
              className="edit-product-input"
              value={editedProduct.popularity}
              name="popularity"
              onChange={(e) => editProductHandler(e)}
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="آدرس کاور جدید را وارد کنید"
              className="edit-product-input"
              value={editedProduct.img}
              name="img"
              onChange={(e) => editProductHandler(e)}
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="میزان فروش جدید را وارد کنید"
              className="edit-product-input"
              value={editedProduct.sale}
              name="sale"
              onChange={(e) => editProductHandler(e)}
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="تعداد رنگ بندی جدید را وارد کنید"
              className="edit-product-input"
              value={editedProduct.colors}
              name="colors"
              onChange={(e) => editProductHandler(e)}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}

export default ProductsTable;
