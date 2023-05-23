const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
    countinstock: { type: Number, require: true },
    stockstatus: { type: String, require: true },
    image: { type: Object, require: true },
    category: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

exports.Product = Product;
