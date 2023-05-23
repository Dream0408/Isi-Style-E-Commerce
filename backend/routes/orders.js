const { Order } = require("../models/order");
// const moment = require("moment");

const router = require("express").Router();


// GET ORDERS

router.get("/", async (req, res) => {
  const query = req.query.new;

  try {
    const orders = query
      ? await Order.find().sort({ _id: -1 }).limit(4)
      : await Order.find().sort({ _id: -1 });

      res.status(200).send(orders)
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// UPDATE ORDERS

module.exports = router;