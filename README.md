# 🛒 ShopEasy - E-Commerce Website

A modern **Microservices-based E-Commerce Web Application** built using **React, Node.js, Express, and MongoDB**. The application demonstrates how different features of an e-commerce platform can be separated into independent services while sharing a common MongoDB database.

---

## 🚀 Features

- 🛍 Browse Products
- 🔍 Search Products
- 🛒 Add Products to Cart
- ❌ Remove Products from Cart
- 💳 Buy Now
- 📦 Place Orders
- 💰 Payment Service (Simulation)
- ⚡ Microservices Architecture
- 📱 Responsive UI

---

# 🏗 Microservices Architecture

```
                 React Frontend
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
 Product API     Search API     Cart API
   Port 5001      Port 5002     Port 5003
        │             │             │
        └─────────────┼─────────────┘
                      │
                 MongoDB Atlas
                      │
        ┌─────────────┼─────────────┐
        ▼                           ▼
 Order API                   Payment API
 Port 5004                   Port 5005
```

---

# 📂 Project Structure

```
ShopEasy-Ecommerce-Site/

│── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...

│── services/
│   ├── product-service/
│   ├── search-service/
│   ├── cart-service/
│   ├── order-service/
│   └── payment-service/

└── README.md
```

---

# 💻 Tech Stack

## Frontend

- React
- Vite
- Axios
- CSS3

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

---

# 📌 Services

## 📦 Product Service (Port 5001)

Handles product-related operations.

### APIs

- GET Products
- Add Product
- Update Product
- Delete Product

---

## 🔍 Search Service (Port 5002)

Handles searching products by name or category.

### APIs

- Search Products

---

## 🛒 Cart Service (Port 5003)

Handles shopping cart operations.

### APIs

- Add to Cart
- View Cart
- Remove from Cart

---

## 📦 Order Service (Port 5004)

Handles order placement.

### APIs

- Place Order
- View Orders

---

## 💳 Payment Service (Port 5005)

Simulates payment processing.

### APIs

- Process Payment
- View Payments

---

# ⚙ Installation

## 1. Clone Repository

```bash
git clone https://github.com/DeeprajNaik28/ShopEasy-Ecommerce-Site.git

cd ShopEasy-Ecommerce-Site
```

---

## 2. Install Frontend

```bash
cd frontend

npm install
```

---

## 3. Install Backend Services

Repeat inside every service folder.

Example:

```bash
cd services/product-service

npm install
```

Do the same for:

- search-service
- cart-service
- order-service
- payment-service

---

## 4. Configure Environment Variables

Create a `.env` file inside each service.

```env
PORT=5001
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

Use different ports:

| Service | Port |
|----------|------|
| Product | 5001 |
| Search | 5002 |
| Cart | 5003 |
| Order | 5004 |
| Payment | 5005 |

---

# ▶ Running the Project

Start each backend service.

Example:

```bash
cd services/product-service

npm run dev
```

Start the remaining services in separate terminals.

Then start the frontend:

```bash
cd frontend

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📊 Database Collections

MongoDB contains the following collections:

- products
- cart
- orders
- payments

---

# 🔗 API Endpoints

## Product Service

```
GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

---

## Search Service

```
GET /api/search?query=product_name
```

---

## Cart Service

```
GET    /api/cart
POST   /api/cart
DELETE /api/cart/:id
```

---

## Order Service

```
GET    /api/orders
POST   /api/orders
```

---

## Payment Service

```
GET    /api/payments
POST   /api/payments
```

---

# ✨ Future Improvements

- User Authentication
- Admin Dashboard
- Product Images
- Categories & Filters
- Quantity Update
- Product Reviews

---