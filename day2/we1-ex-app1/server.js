import express from "express";
import logger from "./middlewares/logger.js";
import normalizeName from "./middlewares/normalizeName.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

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

app.get("/products/search", (req, res) => {
  const name = req.query.name;

  const result = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase()),
  );

  res.json(result);
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

app.post("/products", normalizeName, (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products[products.length - 1].id + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added",
    product: newProduct,
  });
});

app.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);
  products[index] = { id, ...req.body };

  res.json({
    message: "Product updated",
    product: products[index],
  });
});

app.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);
  products[index] = { ...products[index], ...req.body };

  res.json({
    message: "Product partially updated",
    product: products[index],
  });
});

app.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);

  products.splice(index, 1);

  res.json({
    message: "Product deleted",
    productID: id,
  });
});

app.get("/admin", (req, res)=> {
    res.send('Admin Area');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
