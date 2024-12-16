import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineInsertComment } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li className="active">
          <a href="#">
            <AiOutlineHome />
            صفحه اصلی
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineProductionQuantityLimits />
            محصولات
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineInsertComment />
            کامنت ها
          </a>
        </li>
        <li>
          <a href="#">
            <FiUsers />
            کاربران
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineShoppingBag />
            سفارشات
          </a>
        </li>
        <li>
          <a href="#">
            <BsCurrencyDollar />
            تخفیف ها
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
