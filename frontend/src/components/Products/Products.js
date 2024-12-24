import { useEffect, useState } from "react";

import AddNewProduct from "../AddNewProducts/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";
import { ToastContainer } from "react-toastify";

function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  return (
    <div>
      <AddNewProduct getAllProducts={getAllProducts} />
      <ProductsTable
        allProducts={allProducts}
        getAllProducts={getAllProducts}
      />
      <ToastContainer />
    </div>
  );
}

export default Products;
