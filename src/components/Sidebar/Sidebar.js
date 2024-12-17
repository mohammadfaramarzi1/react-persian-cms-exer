import { Link } from "react-router-dom";

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
          <Link>
            <AiOutlineHome to="/products"/>
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link to="/products">
            <MdOutlineProductionQuantityLimits />
            محصولات
          </Link>
        </li>
        <li>
          <Link to="/comments">
            <MdOutlineInsertComment />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FiUsers />
            کاربران
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <MdOutlineShoppingBag />
            سفارشات
          </Link>
        </li>
        <li>
          <Link to="/offs">
            <BsCurrencyDollar />
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
