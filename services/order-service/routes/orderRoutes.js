const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Place order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;