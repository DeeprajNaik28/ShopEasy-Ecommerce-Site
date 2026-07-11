const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const paymentRoutes = require("./routes/paymentRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Payment Service Running",
  });
});

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Payment Service running on http://localhost:${PORT}`);
});