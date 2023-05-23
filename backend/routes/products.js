const express = require("express");
const cloudinary = require("../utils/cloudinary");
const { Product } = require("../models/product");

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const { name, price, countinstock, stockstatus, image, category } = req.body;

  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "isistyle-shop",
      });

      if (uploadRes) {
        const product = new Product({
          name,
          price,
          countinstock,
          stockstatus,
          category,
          image: uploadRes,
        });

        const saveProduct = await product.save();

        res.status(200).send(saveProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// GET ALL PRODUCTS

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).send("Product not found...");

    if (product.image.public_id) {
      const destroyResponse = await cloudinary.uploader.destroy(
        product.image.public_id
      );

      if (destroyResponse) {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);

        res.status(200).send(deleteProduct);
      }
    } else {
      console.log("Action terminated. Failed to delete product image ...");
    }
  } catch (error) {
    res.status(500).send(500);
  }
});

// EDIT PRODUCT

router.put("/:id", async (req, res) => {
  if (req.body.productImg) {
    try { 
    const destroyResponse = await cloudinary.uploader.destroy(
      req.body.product.image.public_id
    );

    if (destroyResponse) {
      const uploadedResponse = await cloudinary.uploader.upload(
        req.body.productImg,
        {
          upload_preset: "isistyle-shop",
        }
      );

      if (uploadedResponse) {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: {
              ...req.body.product,
              image: uploadedResponse,
            },
          },
          { new: true }
        );
        res.status(200).send(updatedProduct);
      }
    }
  }catch (error) {
    res.status(500).send(error)
  }
  
  } else {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body.product,
        },
        { new: true }
      );
      res.status(200).send(updatedProduct);
    } catch (error) {
      res.status(500).send(error);
    }
  }
});

module.exports = router;
