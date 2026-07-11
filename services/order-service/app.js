const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Order Service Running",
  });
});

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Order Service running on http://localhost:${PORT}`);
});