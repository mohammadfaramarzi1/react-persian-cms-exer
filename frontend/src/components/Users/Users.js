import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import DeleteModal from "../DeleteModal/DeleteModal";
import Errorbox from "../Errorbox/Errorbox";
import EditModal from "../EditModal/EditModal";
import DetailsModal from "../DetailsModal/DetailsModal";

import "./Users.css";
import { AiOutlineDollarCircle } from "react-icons/ai";

function Users() {
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState("");
  const [mainUser, setMainUser] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [form, setForm] = useState({
    firsname: "",
    lastname: "",
    username: "",
    password: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    score: "",
    buy: "",
  });

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  };

  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };

  const removeUser = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllUsers();
        toast("کاربر مورد نظر با موفقیت حذف شد", {
          position: "top-right",
          type: "success",
        });
      })
      .catch((err) => {
        setIsShowDeleteModal(false);
        toast("کاربر مورد نظر با موفقیت حذف نشد", {
          position: "top-right",
          type: "error",
        });
      });
  };

  const closeEditModal = () => {
    setIsShowEditModal(false);
  };

  const updateUser = (event) => {
    event.preventDefault();
    const newUserInfos = {
      firsname: form.firsname,
      lastname: form.lastname,
      username: form.username,
      phone: form.phone,
      email: form.email,
      address: form.address,
      buy: form.buy,
      city: form.city,
      password: form.password,
      score: form.score,
    };
    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUserInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        getAllUsers();
        setIsShowEditModal(false);
        toast("کاربر مورد نظر با موفقیت ویرایش شد", {
          position: "top-right",
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        toast("کاربر مورد نظر با موفقیت ویرایش نشد", {
          position: "top-right",
          type: "error",
        });
        setIsShowEditModal(false);
      });
  };

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <>
      {users.length ? (
        <div className="cms-main">
          <h1 className="cms-title">لیست کاربران</h1>
          <table className="cms-table">
            <thead>
              <tr>
                <th>نام و نام خانوادگی</th>
                <th>نام کاربری</th>
                <th>رمز عبور</th>
                <th>شماره تماس</th>
                <th>ایمیل</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.firsname} {user.lastname}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>0{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        setIsShowDeleteModal(true);
                        setUserID(user.id);
                      }}
                    >
                      حذف
                    </button>
                    <button
                      onClick={() => {
                        setIsShowDetailsModal(true);
                        setMainUser(user);
                      }}
                    >
                      جزییات
                    </button>
                    <button
                      onClick={() => {
                        setIsShowEditModal(true);
                        setUserID(user.id);
                        setForm({ ...user });
                      }}
                    >
                      ویرایش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Errorbox msg="هیچ کاربری یافت نشد..." />
      )}
      {isShowDeleteModal && (
        <DeleteModal
          title="آیا از حذف کاربر اطمینان دارید؟"
          deleteModalCancelAction={deleteModalCancelAction}
          deleteModalSubmitAction={removeUser}
        />
      )}
      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateUser}>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="نام جدید را وارد کنید"
              className="edit-user-info-input"
              value={form.firsname}
              name="firsname"
              onChange={changeHandler}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="نام خانوادگی جدید را وارد کنید"
              className="edit-user-info-input"
              value={form.lastname}
              name="lastname"
              onChange={changeHandler}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="نام کاربری جدید را وارد کنید"
              className="edit-user-info-input"
              value={form.username}
              name="username"
              onChange={changeHandler}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="رمز عبور جدید را وارد کنید"
              className="edit-user-info-input"
              value={form.password}
              name="password"
              onChange={changeHandler}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="ایمیل جدید را وارد کنید"
              className="edit-user-info-input"
              value={form.email}
              name="email"
              onChange={changeHandler}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="شماره تماس جدید را وارد کنید"
              className="edit-user-info-input"
              value={form.phone}
              name="phone"
              onChange={changeHandler}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <textarea
              type="text"
              placeholder="آدرس جدید را وارد کنید"
              className="edit-user-info-input"
              value={form.address}
              name="address"
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="خرید جدید را وارد کنید"
              className="edit-user-info-input"
              value={form.buy}
              name="buy"
              onChange={changeHandler}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="شهر جدید را وارد کنید"
              className="edit-user-info-input"
              value={form.city}
              name="city"
              onChange={changeHandler}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="امتیاز جدید را وارد کنید"
              className="edit-user-info-input"
              value={form.score}
              name="score"
              onChange={changeHandler}
            />
          </div>
        </EditModal>
      )}
      {isShowDetailsModal && (
        <DetailsModal closeDetailsModal={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>شهر</th>
                <th>آدرس</th>
                <th>امتیاز</th>
                <th>میزان خرید</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainUser.city}</td>
                <td>{mainUser.address}</td>
                <td>{mainUser.score}</td>
                <td>{mainUser.buy.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
      <ToastContainer />
    </>
  );
}

export default Users;
