const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");

// Get all cart items
router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find();

    res.json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Add item to cart
router.post("/", async (req, res) => {
  try {
    const item = new Cart(req.body);

    await item.save();

    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Remove item from cart
router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item removed from cart",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;