import { products } from "../data/products.js";

export function getProducts(req, res) {
  res.json(products);
}

export function searchProducts(req, res) {
  const name = req.query.name;

  const result = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase()),
  );

  res.json(result);
}

export function getProductById(req, res) {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);

  res.json(product);
}

export function getProductByPrice(req, res) {
  const price = +req.params.price;
  const product = products.find((p) => p.price === price);

  if (product) {
    res.json(product);
  } else {
    res.status(400).json({ status: "fail", message: "no product" });
  }
}

export function addProduct(req, res) {
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
}

export function updateProductById(req, res) {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);
  products[index] = { id, ...req.body };

  res.json({
    message: "Product updated",
    product: products[index],
  });
}

export function patchProductById(req, res) {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);
  products[index] = { ...products[index], ...req.body };

  res.json({
    message: "Product partially updated",
    product: products[index],
  });
}

export function deleteProductById(req, res) {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);

  products.splice(index, 1);

  res.json({
    message: "Product deleted",
    productID: id,
  });
}
