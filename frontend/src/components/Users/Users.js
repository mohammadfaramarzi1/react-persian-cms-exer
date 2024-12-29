import React, { useEffect, useState } from "react";

import DeleteModal from "../DeleteModal/DeleteModal";

import Errorbox from "../Errorbox/Errorbox";
import { toast, ToastContainer } from "react-toastify";

function Users() {
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState("");
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(users);

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
                    <button>جزییات</button>
                    <button>ویرایش</button>
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
      <ToastContainer />
    </>
  );
}

export default Users;
