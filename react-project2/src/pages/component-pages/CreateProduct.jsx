import { useState } from "react";
import { useDispatch } from "react-redux";
import "./createproduct.scss";

import { Form } from "reactstrap";
import { productsCreate } from "../../slices/productsSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const [productImg, setProductImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [countinstock, setCountinstock] = useState("");
  const [stockstatus, setStockstatus] = useState("");
  const [category, setCategory] = useState("");

  console.log(productImg);

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TranformFile(file);
  };

  const TranformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      productsCreate({
        name,
        price,
        category,
        stockstatus,
        countinstock,
        image: productImg,
      })
    );
  };

  return (
    <div className="inventory">
      <h3>CREATE  PRODUCT</h3>
      <div className="create__product">
        <Form className="form__create" onSubmit={handleSubmit}>
          <span>Image</span>
          <input
            className="input__form"
            type="file"
            accept="/image"
            onChange={handleProductImageUpload}
            required
          />
          <span>Title</span>
          <input
            className="input__form"
            type="text"
            placeholder="Denim Long Jean"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <span>Price</span>
          <input
            className="input__form"
            type="number"
            placeholder="฿ 490"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          <span>Category</span>
          <select
            className="input__form"
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select category</option>
            <option value="Jean">Jeans</option>
            <option value="T-Shirt">T - Shirt</option>
            <option value="Blazer">Blazer</option>
            <option value="Pants">Pants</option>
          </select>
          <span>Count in stock</span>
          <input
            className="input__form"
            type="number"
            placeholder="10"
            required
            onChange={(e) => setCountinstock(e.target.value)}
          />

          <span>Stock status</span>
          <select
            className="input__form"
            onChange={(e) => setStockstatus(e.target.value)}
            required
          >
            <option value="">Select status</option>
            <option value="In stock">In stock</option>
            <option value="Out of stock">Out of stock</option>
          </select>
          <div className="button__submit">
            <button class="btn" type="submit">
              {" "}
              <i class="fa fa-plus-circle" aria-hidden="true"></i>Submit
            </button>
          </div>
        </Form>
        <div className="image__preview">
          {productImg ? (
            <>
              <img src={productImg} alt="product image" />
            </>
          ) : (
            <p>Image preview will appear here !</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
