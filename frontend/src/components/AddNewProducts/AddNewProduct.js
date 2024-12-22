import { useState } from "react";

import "./AddNewProduct.css";

function AddNewProduct() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    count: 0,
    img: "",
    popularity: "",
    sale: "",
    colors: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const addNewProductHandler = (event) => {
    event.preventDefault();
    const newProductInfos = {
      title: form.title,
      price: form.price,
      count: form.count,
      img: form.img,
      popularity: form.popularity,
      sale: form.sale,
      colors: form.colors,
    };
    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProductInfos),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصول جدید</h1>
      <form action="#" className="add-products-form">
        <div className="add-products-form-wrap">
          <div className="add-products-form-group">
            <input
              type="text"
              name="title"
              value={form.colorstitle}
              onChange={(event) => changeHandler(event)}
              placeholder="نام محصول"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={(event) => changeHandler(event)}
              placeholder="قیمت محصول"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              name="count"
              value={form.count}
              onChange={(event) => changeHandler(event)}
              placeholder="موجودی محصول"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              name="img"
              value={form.img}
              onChange={(event) => changeHandler(event)}
              placeholder="آدرس عکس محصول"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              name="popularity"
              value={form.popularity}
              onChange={(event) => changeHandler(event)}
              placeholder="میزان محبوبیت محصول"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              name="sale"
              value={form.sale}
              onChange={(event) => changeHandler(event)}
              placeholder="میزان فروش محصول"
              className="add-products-input"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              name="colors"
              value={form.colors}
              onChange={(event) => changeHandler(event)}
              placeholder="تعداد رنگ بندی محصول"
              className="add-products-input"
            />
          </div>
        </div>
        <button className="add-products-btn" onClick={addNewProductHandler}>
          ثبت محصول
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
