# 🛒 ShopEasy - Microservices E-Commerce Website

A modern **Microservices-based E-Commerce Web Application** built using **React, Node.js, Express, and MongoDB Atlas**. The application separates major e-commerce functionalities into independent services while sharing a common MongoDB database.

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
- 🌐 REST APIs
- 📱 Responsive User Interface

---

# 🏗 Microservices Architecture

```
                 React Frontend
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
 Product API     Search API     Cart API
   Port 5001      Port 5002      Port 5003
        │             │              │
        └─────────────┼──────────────┘
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

├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...

├── services/
│   ├── product-service/
│   ├── search-service/
│   ├── cart-service/
│   ├── order-service/
│   └── payment-service/

├── scripts/
│   ├── install.bat
│   └── run.bat

├── README.md
└── .gitignore
```

---

# 💻 Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS3

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

---

# 📌 Services

## 📦 Product Service (Port 5001)

Responsible for product management.

### APIs

```
GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

---

## 🔍 Search Service (Port 5002)

Responsible for searching products.

### APIs

```
GET /api/search?query=product_name
```

---

## 🛒 Cart Service (Port 5003)

Responsible for shopping cart management.

### APIs

```
GET    /api/cart
POST   /api/cart
DELETE /api/cart/:id
```

---

## 📦 Order Service (Port 5004)

Responsible for order management.

### APIs

```
GET    /api/orders
POST   /api/orders
```

---

## 💳 Payment Service (Port 5005)

Simulates payment processing.

### APIs

```
GET    /api/payments
POST   /api/payments
```

---

# ⚙ Installation

## 1. Clone Repository

```bash
git clone https://github.com/DeeprajNaik28/ShopEasy-Ecommerce-Site.git

cd ShopEasy-Ecommerce-Site
```

---

## 2. Install All Dependencies

### Option 1

Run the installer script.

```
scripts/install.bat
```

This installs all required dependencies for:

- Frontend
- Product Service
- Search Service
- Cart Service
- Order Service
- Payment Service

---

## 3. Configure Environment Variables

Create a `.env` file inside each service.

Example:

```env
PORT=5001
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

Use different ports:

| Service | Port |
|----------|------|
| Product Service | 5001 |
| Search Service | 5002 |
| Cart Service | 5003 |
| Order Service | 5004 |
| Payment Service | 5005 |

---

# ▶ Running the Project

### Option 1 

Run:

```
scripts/run.bat
```

This automatically starts:

- Frontend
- Product Service
- Search Service
- Cart Service
- Order Service
- Payment Service

---

Frontend:

```
http://localhost:5173
```

---

# 📊 Database Collections

MongoDB Atlas contains:

- products
- cart
- orders
- payments

# ✨ Future Improvements

- User Authentication 
- Admin Dashboard
- Product Images
- Product Categories
- Product Quantity Update
- Order History
- Product Reviews & Ratings