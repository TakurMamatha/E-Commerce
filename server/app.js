const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const userRoutes = require("./routes/userRoutes");
const path = require("path");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// ==========================
// BODY PARSER
// ==========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================
// SECURITY MIDDLEWARES
// ==========================

// 1️⃣ Helmet - Secure HTTP headers
app.use(helmet());

// 2️⃣ CORS - Allow frontend connection
app.use(cors());
app.use(express.static(path.join(__dirname, "../client")));
// 3️⃣ Rate Limiting - Prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

// ==========================
// TEST ROUTE
// ==========================
app.get("/", (req, res) => {
  res.json({ message: "E-Commerce API is running 🚀" });
});

// ==========================
// ROUTES
// ==========================
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/users", userRoutes);

// ==========================
// ERROR MIDDLEWARES (ALWAYS LAST)
// ==========================
app.use(notFound);
app.use(errorHandler);

module.exports = app;
