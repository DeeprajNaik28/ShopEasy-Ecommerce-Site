const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const cartRoutes = require("./routes/cartRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Cart Service Running",
  });
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Cart Service running on http://localhost:${PORT}`);
});