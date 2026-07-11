const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const query = req.query.query;

    const products = await Product.find({
      $or: [
        {
          name: {
            $regex: query,
            $options: "i",
          },
        },
        {
          category: {
            $regex: query,
            $options: "i",
          },
        },
      ],
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;