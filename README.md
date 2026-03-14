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

## ⚙️ Installation & Setup

Follow the steps below to run this project locally.

### 1. Clone the Repository

Download the project from GitHub.

```bash
git clone https://github.com/your-username/e-commerce-project.git
```

### 2. Navigate to the Project Directory

```bash
cd e-commerce-project
```

### 3. Install Backend Dependencies

Go to the server folder and install the required packages.

```bash
cd server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the **server** directory and add the following configuration:

```
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=your_secret_key
PORT=5000
```

### 5. Start the Backend Server

```bash
npm start
```

The backend server will run at:

```
http://localhost:5000
```

### 6. Run the Frontend

Open the **client** folder and run the project using **Live Server** in VS Code or open the HTML files in a browser.

Example:

```
client/pages/user/index.html
```

### 7. Ensure MongoDB is Running

Make sure MongoDB is running locally on your system.
The project uses the following database:

```
ecommerce
```

You can view the data using **MongoDB Compass**.

### 8. Access the Application

Frontend:

```
http://127.0.0.1:5500
```

Backend API:

```
http://localhost:5000/api
```
## 📡 API Endpoints

### 👤 User

| Method | Endpoint | Description |
|-------|----------|-------------|
| POST  | /api/users/register | Register a new user |
| POST  | /api/users/login | Login user |
| GET   | /api/users/profile | Get user profile |

### 📦 Products

| Method | Endpoint | Description |
|-------|----------|-------------|
| GET   | /api/products | Get all products |
| GET   | /api/products/:id | Get product by ID |

### 🛒 Cart

| Method | Endpoint | Description |
|-------|----------|-------------|
| POST  | /api/cart | Add product to cart |
| GET   | /api/cart | Get cart items |
| DELETE| /api/cart/:id | Remove item from cart |

### 📦 Orders

| Method | Endpoint | Description |
|-------|----------|-------------|
| POST  | /api/orders | Create a new order |
| GET   | /api/orders/myorders | Get logged-in user orders |



