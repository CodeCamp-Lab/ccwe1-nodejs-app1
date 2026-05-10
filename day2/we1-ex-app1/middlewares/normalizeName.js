export default function normalizeName(req, res, next) {
  if (req.body.name) {
    req.body.name = req.body.name.toLowerCase();
  } else {
    return res.status(400).json({ error: "Missing name" });
  }

  next();
}
