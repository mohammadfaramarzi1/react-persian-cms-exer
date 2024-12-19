import "./AddNewProduct.css"

function AddNewProduct() {
  return (
    <div className="products-main">
        <h1 className="products-title">افزودن محصول جدید</h1>
        <form action="#" className="add-products-form">
            <div className="add-products-form-wrap">
                <div className="add-products-form-group">
                    <input type="text" placeholder="نام محصول" className="add-products-input" />
                </div>
                <div className="add-products-form-group">
                    <input type="text" placeholder="قیمت محصول" className="add-products-input" />
                </div>
                <div className="add-products-form-group">
                    <input type="text" placeholder="موجودی محصول" className="add-products-input" />
                </div>
                <div className="add-products-form-group">
                    <input type="text" placeholder="آدرس عکس محصول" className="add-products-input" />
                </div>
                <div className="add-products-form-group">
                    <input type="text" placeholder="میزان محبوبیت محصول" className="add-products-input" />
                </div>
                <div className="add-products-form-group">
                    <input type="text" placeholder="میزان فروش محصول" className="add-products-input" />
                </div>
                <div className="add-products-form-group">
                    <input type="text" placeholder="تعداد رنگ بندی محصول" className="add-products-input" />
                </div>
            </div>
            <button className="add-products-btn">ثبت محصول</button>
        </form>
    </div>
  )
}

export default AddNewProduct