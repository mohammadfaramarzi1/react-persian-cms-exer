import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Comments from "./components/Comments/Comments";
import Users from "./components/Users/Users";
import Orders from "./components/Orders/Orders";
import Offs from "./components/Offs/Offs";

import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/users" element={<Users />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/offs" element={<Offs />} />
      </Routes>
      <Sidebar />
      <div className="main">
        <Header />
      </div>
    </>
  );
}
