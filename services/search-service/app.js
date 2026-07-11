const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const searchRoutes = require("./routes/searchRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/search", searchRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Search Service Running",
  });
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Search Service running on http://localhost:${PORT}`);
});