import express from "express";
import { users } from "../data/users.js";
import { checkAdmin } from "../middleware/checkAdmin.js";
import {
  getUsers,
  addUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.delete("/:email", checkAdmin, deleteUser);

export default router;
