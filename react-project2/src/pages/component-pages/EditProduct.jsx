import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./editproduct.scss";
import { Form } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { productsEdit } from "../../slices/productsSlice";

export default function EditProduct({ prodId }) {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { items, editStatus } = useSelector((state) => state.products);

  const [currentProd, setCurrentProd] = useState({});
  const [previewImg, setPreviewImg] = useState("");

  const [productImg, setProductImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [countinstock, setCountinstock] = useState("");
  const [stockstatus, setStockstatus] = useState("");
  const [category, setCategory] = useState("");

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
        setPreviewImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      productsEdit({
        productImg,
        product: {
          ...currentProd,
          name: name,
          price: price,
          category: category,
          stockstatus: stockstatus,
          countinstock: countinstock,
        },
      })
    );
  };

  const handleClickOpen = () => {
    setOpen(true);

    let selectProd = items.filter((item) => item._id === prodId);

    selectProd = selectProd[0];

    setCurrentProd(selectProd);
    setPreviewImg(selectProd.image.url);
    setProductImg("");
    setName(selectProd.name);
    setPrice(selectProd.price);
    setCategory(selectProd.category);
    setStockstatus(selectProd.stockstatus);
    setCountinstock(selectProd.countinstock);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className="Edit">
        Edit
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
      >
        <DialogTitle>Edit Inventory</DialogTitle>
        <DialogContent className="Edit__dialog">
          <div className="edit__product">
            <Form className="form__edit" onSubmit={handleSubmit}>
              <span>Image</span>
              <input
                className="edit__form"
                type="file"
                accept="/image"
                onChange={handleProductImageUpload}
              />
              <span>Title</span>
              <input
                className="edit__form"
                type="text"
                placeholder="Denim Long Jean"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <span>Price</span>
              <input
                className="edit__form"
                type="number"
                placeholder="฿ 490"
                value={price}
                required
                onChange={(e) => setPrice(e.target.value)}
              />
              <span>Category</span>
              <select
                className="edit__form"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
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
                className="edit__form"
                type="number"
                placeholder="10"
                value={countinstock}
                required
                onChange={(e) => setCountinstock(e.target.value)}
              />

              <span>Stock status</span>
              <select
                className="edit__form"
                onChange={(e) => setStockstatus(e.target.value)}
                value={stockstatus}
                required
              >
                <option value="">Select status</option>
                <option value="In stock">In stock</option>
                <option value="Out of stock">Out of stock</option>
              </select>
              <div className="button__submit">
                <button class="btn" type="submit">
                  {/* <i class="fa fa-plus-circle" aria-hidden="true" > */}
                    {editStatus === "pending" ? "Submitting" : "SUBMIT"}
                  {/* </i> */}
                </button>
              </div>
            </Form>
            <div className="image__preview__edit">
              {previewImg ? (
                <>
                  <img src={previewImg} alt="product image" />
                </>
              ) : (
                <p>Image preview will appear here !</p>
              )}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
