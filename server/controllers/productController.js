import Product from "../models/Product.js";

// GET all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

// GET single product
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

// CREATE product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

export default {
  getProducts,
  getProductById,
  createProduct,
};