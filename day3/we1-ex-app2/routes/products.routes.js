import express from "express";
import normalizeName from "../middleware/normalizeName.js";
import {
  getProducts,
  searchProducts,
  getProductById,
  getProductByPrice,
  addProduct,
  updateProductById,
  patchProductById,
  deleteProductById
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/search", searchProducts);
router.get("/:id/comments",getProductById);
router.get("/price/:price", getProductByPrice);
router.post("/", normalizeName, addProduct);
router.put("/:id", updateProductById);
router.patch("/:id", patchProductById);
router.delete("/:id", deleteProductById);

export default router;