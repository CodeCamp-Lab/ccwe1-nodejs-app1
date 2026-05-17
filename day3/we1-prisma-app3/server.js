import express from "express";
import prisma from "./lib/prisma.js";

const app = express();
const PORT = 3000;

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
