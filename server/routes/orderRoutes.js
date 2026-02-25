const express = require("express");
const router = express.Router();

const {
  createOrder,
  getMyOrders,
  getAllOrders,
  markAsDelivered,
} = require("../controllers/orderController");

const { protect, admin } = require("../middleware/authMiddleware");

router.post("/", protect, createOrder);
// router.post("/:id/reviews", protect, createProductReview);

router.get("/myorders", protect, getMyOrders);
router.get("/", protect, admin, getAllOrders);
router.put("/:id/deliver", protect, admin, markAsDelivered);

module.exports = router;
