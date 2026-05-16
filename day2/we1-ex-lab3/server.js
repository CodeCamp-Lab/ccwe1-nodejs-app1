import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Api v0.1.0");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
