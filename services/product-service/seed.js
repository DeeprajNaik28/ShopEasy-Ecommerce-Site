const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany([
      {
        name: "Wireless Headphones",
        description: "Bluetooth Headphones",
        category: "Electronics",
        price: 1999,
        stock: 15,
        image: "",
      },
      {
        name: "Gaming Mouse",
        description: "RGB Gaming Mouse",
        category: "Electronics",
        price: 999,
        stock: 20,
        image: "",
      },
      {
        name: "Mechanical Keyboard",
        description: "RGB Mechanical Keyboard",
        category: "Electronics",
        price: 2499,
        stock: 12,
        image: "",
      },
      {
        name: "Smart Watch",
        description: "Fitness Smart Watch",
        category: "Wearables",
        price: 3499,
        stock: 8,
        image: "",
      },
      {
        name: "Bluetooth Speaker",
        description: "Portable Speaker",
        category: "Audio",
        price: 1499,
        stock: 18,
        image: "",
      },
    ]);

    console.log("✅ Products Inserted Successfully");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });