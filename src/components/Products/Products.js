import React from "react";
import Errorbox from "../Errorbox/Errorbox";
import AddNewProduct from "../AddNewProducts/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import DeleteModal from "../DeleteModal/DeleteModal";

function Products() {
  return (
    <div>
      <AddNewProduct />
      <Errorbox msg="هیچ محصولی یافت نشد..." />
      <ProductsTable />
      <DeleteModal />
    </div>
  );
}

export default Products;
