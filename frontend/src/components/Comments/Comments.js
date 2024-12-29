import { useState, useEffect } from "react";

import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import Errorbox from "../Errorbox/Errorbox";

import "./Comments.css";
import { toast, ToastContainer } from "react-toastify";

function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [commentBody, setCommnetBody] = useState("");
  const [commentID, setCommentID] = useState("");

  useEffect(() => {
    getAllComments();
  }, []);

  function getAllComments() {
    fetch("http://localhost:8000/api/comments/")
      .then((res) => res.json())
      .then((comments) => {
        setAllComments(comments);
      });
  }

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const closeEditModal = () => {
    setIsShowEditModal(false);
  };

  const updateComment = (event) => {
    event.preventDefault();
    console.log("update");
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "PUT",
      body: JSON.stringify({
        body: commentBody,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getAllComments();
        setIsShowEditModal(false);
        toast("کامنت مورد نظر با موفقیت ویرایش شد", {
          type: "success",
          position: "top-right",
        });
      })
      .catch((err) => {
        setIsShowDeleteModal(false);
        toast("کامنت مورد نظر با موفقیت ویرایش نشد", {
          type: "error",
          position: "top-right",
        });
      });
  };

  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };

  const acceptModalCancelAction = () => {
    setIsShowAcceptModal(false);
  };

  const acceptModalSubmitAction = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/comments/accept/${commentID}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowAcceptModal(false);
        // getAllComments();
        toast("کامنت مورد نظر با موفقیت تایید شد", {
          type: "success",
          position: "top-right",
        });
      })
      .catch((err) => {
        setIsShowDeleteModal(false);
        toast("کامنت مورد نظر با موفقیت تایید نشد", {
          type: "error",
          position: "top-right",
        });
      });
    setIsShowAcceptModal(false);
  };

  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowDeleteModal(false);
        getAllComments();
        toast("کامنت مورد نظر با موفقیت حذف شد", {
          type: "success",
          position: "top-right",
        });
      })
      .catch((err) => {
        setIsShowDeleteModal(false);
        toast("کامنت مورد نظر با موفقیت حذف نشد", {
          type: "error",
          position: "top-right",
        });
      });
  };

  return (
    <div className="cms-main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام کاربر</th>
              <th>نام محصول</th>
              <th>متن کامنت</th>
              <th>تاریخ ثبت</th>
              <th>ساعت ثبت</th>
            </tr>
          </thead>
          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDetailsModal(true);
                      setCommnetBody(comment.body);
                    }}
                  >
                    دیدن محتوا
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setCommentID(comment.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => {
                      setIsShowEditModal(true);
                      setCommnetBody(comment.body);
                      setCommentID(comment.id);
                    }}
                  >
                    ویرایش
                  </button>
                  <button>پاسخ</button>
                  {!!comment.isAccept ? (
                    ""
                  ) : (
                    <button
                      onClick={() => {
                        setIsShowAcceptModal(true);
                        setCommentID(comment.id);
                      }}
                    >
                      تایید
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ کامنتی یافت نشد..." />
      )}
      {isShowDetailsModal && (
        <DetailsModal closeDetailsModal={closeDetailsModal}>
          <p className="text-modal">{commentBody}</p>
          <button className="text-modal-close-btn" onClick={closeDetailsModal}>
            بستن
          </button>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          deleteModalCancelAction={deleteModalCancelAction}
          deleteModalSubmitAction={deleteModalSubmitAction}
          title="آیا از حذف کامنت اطمینان دارید؟"
        />
      )}
      {isShowEditModal && (
        <EditModal onClose={closeEditModal} onSubmit={updateComment}>
          <textarea
            value={commentBody}
            onChange={(event) => setCommnetBody(event.target.value)}
            style={{ width: "100%", marginTop: "20px" }}
          />
        </EditModal>
      )}
      {isShowAcceptModal && (
        <DeleteModal
          title="آیا از تایید کامنت اطمینان دارید؟"
          deleteModalSubmitAction={acceptModalSubmitAction}
          deleteModalCancelAction={acceptModalCancelAction}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default Comments;
