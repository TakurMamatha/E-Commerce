const express = require("express");
const router = express.Router();


// const {
//   createProduct,
//   getAllProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct,
//   createProductReview,
// } = require("../controllers/productController");

// const { protect, admin } = require("../middleware/authMiddleware");

// // Public routes
// router.get("/", getAllProducts);
// router.get("/:id", getProductById);

// // Admin routes
// router.post("/", protect, admin, createProduct);
// router.put("/:id", protect, admin, updateProduct);
// router.delete("/:id", protect, admin, deleteProduct);
// // router.put("/:id/deliver", protect, admin, markAsDelivered);

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);
router.post("/:id/reviews", protect, createProductReview);

module.exports = router;
