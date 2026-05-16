import { blogs } from "../data/blogs.js";

export function getBlogs(req, res) {
  res.json(blogs);
}

export function getBlogById(req, res) {
  const id = +req.params.blogId;
  const blog = blogs.find((b) => b.id === id);
  res.json(blog);
}
