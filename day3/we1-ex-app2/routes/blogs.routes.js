import express from "express";
import {
  getBlogs,
  getBlogById
} from "../controllers/blogs.controller.js";
import commentsRoutes from "./comments.routes.js"
import validateBlogExists from "../middleware/validateBlogExists.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:blogId", getBlogById);
router.use("/:blogId/comments", validateBlogExists, commentsRoutes)

export default router;
