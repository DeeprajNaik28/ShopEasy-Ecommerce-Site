const express = require("express");
const router = express.Router();

const Payment = require("../models/Payment");

// Get all payments
router.get("/", async (req, res) => {
  try {
    const payments = await Payment.find();

    res.json(payments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Process payment
router.post("/", async (req, res) => {
  try {
    const payment = new Payment({
      ...req.body,
      transactionId: "TXN" + Date.now(),
      status: "Success",
    });

    await payment.save();

    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;