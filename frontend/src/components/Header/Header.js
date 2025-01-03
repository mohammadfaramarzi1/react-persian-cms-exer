import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="/img/5933965531445052693.jpg" alt="admin" />
        <div>
          <h1>محمد فرامرزی</h1>
          <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>
      <div className="header-left-section">
        <div className="search-box">
          <input type="text" placeholder="جستجو بکنید..." />
          <button>جستجو</button>
        </div>
        <button className="header-left-icon">
          <AiOutlineBell />
        </button>
        <button className="header-left-icon">
          <BsBrightnessHigh />
        </button>
      </div>
    </div>
  );
}

export default Header;
