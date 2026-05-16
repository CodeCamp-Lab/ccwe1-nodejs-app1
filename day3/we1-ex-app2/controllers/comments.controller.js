import { blogs } from "../data/blogs.js";

export function getCommentsByBlogId(req, res) {
  const id = +req.params.blogId;
  //   const blog = blogs.find((b) => b.id === id);
  res.json(req.blog.comments);
}

export function getCommentById(req, res) {
  const { blogId, commentId } = req.params;
  //   const blog = blogs.find((b) => b.id === +blogId);

  const comment = req.blog.comments.find((c) => c.id === +commentId);

  res.json(comment);
}

export function getCommentCount(req, res) {
  const count = req.blog.comments.length;

  res.json({
    count,
  });
}
