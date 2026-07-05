# ShopEasy 🛒

ShopEasy is a simple eCommerce web application built with React. It allows users to browse products, search for items, add products to a shopping cart, and simulate the checkout process. The project is designed to practice React fundamentals without using React Router or a backend database.

---

## 🚀 Features

- Display all products
- Search products by name
- Add products to cart
- View shopping cart
- Buy individual products
- Simple checkout page
- MongoDB database integration
- REST API using Express
- Responsive user interface

---

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript
- CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```
ShopEasy/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   └── BuyPage.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── app.js
│   ├── seed.js
│   └── .env
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/ShopEasy.git
```

Navigate to the project folder.

```bash
cd ShopEasy
```

Install frontend dependencies.

```bash
npm install
```

Install backend dependencies.

```bash
cd server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### Start Frontend

Open another terminal.

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🌐 API Endpoints

### Get All Products

```
GET /api/products
```

### Add Product

```
POST /api/products
```

---

## 📦 Database

Products are stored in MongoDB Atlas.

Sample Product Document:

```json
{
  "name": "Wireless Headphones",
  "description": "Bluetooth Headphones",
  "category": "Electronics",
  "price": 1999,
  "stock": 15,
  "image": ""
}
```

---

## 🎯 Future Enhancements

- Product images
- Remove products from cart
- Product quantity management
- User authentication
- Order history
- Payment gateway integration
- Admin dashboard
- Product categories
- Product reviews
