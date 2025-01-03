import { NavLink } from "react-router-dom";

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
        <NavLink to="/">
          <AiOutlineHome to="/products" />
          صفحه اصلی
        </NavLink>
        <NavLink to="/products">
          <MdOutlineProductionQuantityLimits />
          محصولات
        </NavLink>
        <NavLink to="/comments">
          <MdOutlineInsertComment />
          کامنت ها
        </NavLink>
        <NavLink to="/users">
          <FiUsers />
          کاربران
        </NavLink>
        <NavLink to="/orders">
          <MdOutlineShoppingBag />
          سفارشات
        </NavLink>
        <NavLink to="/offs">
          <BsCurrencyDollar />
          تخفیف ها
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
