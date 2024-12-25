import { useState, useEffect } from "react";

import DetailsModal from "../DetailsModal/DetailsModal";
import Errorbox from "../Errorbox/Errorbox";

import "./Comments.css";

function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [commentBody, setCommnetBody] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/comments/")
      .then((res) => res.json())
      .then((comments) => {
        setAllComments(comments);
      });
  }, []);

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
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
                  <button>حذف</button>
                  <button>ویرایش</button>
                  <button>پاسخ</button>
                  <button>تایید</button>
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
    </div>
  );
}

export default Comments;
