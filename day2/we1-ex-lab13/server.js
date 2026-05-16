import express from "express";
import { checkAdmin } from "./middleware/checkAdmin.js";
import { logger } from "./middleware/logger.js";

const app = express();
const PORT = 3000;

const users = [
  { name: "Alice", email: "alice@gmail.com", role: "user" },
  { name: "Bob", email: "bob@gmail.com", role: "admin" },
];

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome Api v0.1.0");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name, email, role } = req.body;
  users.push({ name, email, role });
  res.status(201).json({
    message: "User added",
    user: { name, email, role },
  });
});

app.delete("/users/:email", checkAdmin, (req, res) => {
  const email = req.params.email;
  const index = users.findIndex((u) => u.email === email);

  if (index === -1)
    return res.status(404).json({
      error: "User not found",
    });

  const deleted = users.splice(index, 1);
  res.json({ message: "User deleted", user: deleted[0] });
});

app.get("/me", (req, res) => {
  const role = req.headers["x-user-role"] || "guest";
  res.json({ role });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
