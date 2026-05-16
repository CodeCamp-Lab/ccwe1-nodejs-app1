import express from "express";
import { logger } from "./middleware/logger.js";
import userRoutes from './routes/user.routes.js'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome Api v0.1.0");
});

app.use("/users", userRoutes)


app.get("/me", (req, res) => {
  const role = req.headers["x-user-role"] || "guest";
  res.json({ role });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
