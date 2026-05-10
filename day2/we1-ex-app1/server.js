import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const products = [
  { id: 1, name: "Mouse", price: 250 },
  { id: 2, name: "Keyboard", price: 500 },
];

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/json", (req, res) => {
  const data = {
    name: "John",
    age: 25,
  };
  res.json(data);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);

  res.json(product);
});

app.get("/product-price/:price", (req, res) => {
  const price = +req.params.price;
  const product = products.find((p) => p.price === price);
  if (product) {
    res.json(product);
  } else {
    res.status(400).json({ status: "fail", message: "no product" });
  }
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
