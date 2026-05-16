import express from "express";
import {
  getCommentsByBlogId,
  getCommentById,
  getCommentCount
} from "../controllers/comments.controller.js";

const router = express.Router({ mergeParams: true });

router.get("/", getCommentsByBlogId);
router.get("/count", getCommentCount);
router.get("/:commentId", getCommentById);

export default router;
