import express from "express";

const router = express.Router();

// Get cart
router.get("/", async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      cart: [],
    });
  } catch (error) {
    console.error("Get Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch cart",
    });
  }
});

// Add product to cart
router.post("/add", async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    res.status(201).json({
      success: true,
      message: "Product added to cart",
      productId,
      quantity: quantity || 1,
    });
  } catch (error) {
    console.error("Add Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to add product to cart",
    });
  }
});

// Update cart quantity
router.put("/update", async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Product ID and quantity are required",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      productId,
      quantity,
    });
  } catch (error) {
    console.error("Update Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update cart",
    });
  }
});

// Remove product from cart
router.delete("/remove/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    res.status(200).json({
      success: true,
      message: "Product removed from cart",
      productId,
    });
  } catch (error) {
    console.error("Remove Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to remove product from cart",
    });
  }
});

// Clear cart
router.delete("/clear", async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
    });
  } catch (error) {
    console.error("Clear Cart Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to clear cart",
    });
  }
});

export default router;