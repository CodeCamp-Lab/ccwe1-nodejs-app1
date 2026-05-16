import { users } from "../data/users.js";

export function getUsers(req, res) {
  res.json(users);
}

export function addUser(req, res) {
  const { name, email, role } = req.body;
  users.push({ name, email, role });
  res.status(201).json({
    message: "User added",
    user: { name, email, role },
  });
}

export function deleteUser(req, res) {
  const email = req.params.email;
  const index = users.findIndex((u) => u.email === email);

  if (index === -1)
    return res.status(404).json({
      error: "User not found",
    });

  const deleted = users.splice(index, 1);
  res.json({ message: "User deleted", user: deleted[0] });
}