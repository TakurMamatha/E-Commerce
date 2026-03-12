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

## ⚙️ Installation & Setup Follow these steps to run the project locally on your system. ### 1️⃣ Clone the Repository ```bash git clone https://github.com/your-username/e-commerce-project.git ``` ### 2️⃣ Navigate to the Project Directory ```bash cd e-commerce-project ``` ### 3️⃣ Install Backend Dependencies Navigate to the server folder and install the required packages. ```bash cd server npm install ``` ### 4️⃣ Create Environment Variables Create a `.env` file inside the **server** folder and add the following: ``` MONGO_URI=mongodb://127.0.0.1:27017/ecommerce JWT_SECRET=your_secret_key PORT=5000 ``` ### 5️⃣ Start the Backend Server ```bash npm start ``` The backend server will start at: ``` http://localhost:5000 ``` ### 6️⃣ Run the Frontend Open the **client folder** and run it using **Live Server** in VS Code or open the HTML files directly in the browser. Example path: ``` client/pages/user/index.html ``` ### 7️⃣ Database Setup Make sure **MongoDB is running locally**. Default database used in this project: ``` ecommerce ``` You can verify the database and collections using **MongoDB Compass**. ### 8️⃣ Access the Application Frontend: ``` http://127.0.0.1:5500 ``` Backend API: ``` http://localhost:5000/api ``` --- ### ✅ Requirements Before running the project, ensure you have installed: - Node.js - MongoDB - Git - VS Code (Recommended) ````
