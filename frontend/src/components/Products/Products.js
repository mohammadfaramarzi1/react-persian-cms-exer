import Errorbox from "../Errorbox/Errorbox";
import AddNewProduct from "../AddNewProducts/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

function Products() {
  return (
    <div>
      <AddNewProduct />
      <Errorbox msg="هیچ محصولی یافت نشد..." />
      <ProductsTable />
    </div>
  );
}

export default Products;
