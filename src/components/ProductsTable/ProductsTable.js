import "./ProductsTable.css"

function ProductsTable() {
  return (
    <table className="products-table">
        <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>نام</th>
            <th>قیمت</th>
            <th>موجودی</th>
        </tr>
        <tr>
            <td>
                <img src="/images/oil.jpeg" alt="product cover" className="products-table-img" />
            </td>
            <td>روغن سرخ کردنی</td>
            <td>92000 تومان</td>
            <td>82</td>
            <td>
                <button className="products-table-btn">جزییات</button>
                <button className="products-table-btn">حذف</button>
                <button className="products-table-btn">ویرایش</button>
            </td>
        </tr>
    </table>
  )
}

export default ProductsTable