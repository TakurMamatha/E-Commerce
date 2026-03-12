# 🛒 E-Commerce Web Application

A full-stack **E-Commerce web application** built using **Node.js, Express.js, MongoDB, and JavaScript**.  
Users can browse products, add items to cart, place orders, and manage their profiles.

This project demonstrates **REST API development, authentication, and full-stack integration**.

---

# 🚀 Features

- User Registration & Login (JWT Authentication)
- Product Listing
- Add to Cart
- Remove from Cart
- Order Placement
- Order History
- User Profile
- Secure Backend API
- MongoDB Database Integration

---

# 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT (JSON Web Token)

---

## 📁 Project Structure

```
E-Commerce
│
├── client
│   ├── pages
│   │   └── user
│   │       ├── cart.html
│   │       ├── orders.html
│   │       └── profile.html
│   │
│   └── js
│
├── server
│   ├── controllers
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── userController.js
│   │
│   ├── models
│   │   ├── user.js
│   │   ├── product.js
│   │   ├── order.js
│   │   └── cart.js
│   │
│   ├── routes
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   ├── userRoutes.js
│   │   └── cartRoutes.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-project.git
2️⃣ Navigate to Project Folder
cd ecommerce-project
3️⃣ Install Backend Dependencies
npm install
4️⃣ Create .env File

Inside server folder create:

.env

Add:

MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=your_secret_key
PORT=5000
5️⃣ Start Server
npm start

Server will run on:

http://localhost:5000

