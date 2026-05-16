import { blogs } from "../data/blogs.js";

export default function validateBlogExists(req, res, next) {
  const blogId = +req.params.blogId;
  const blog = blogs.find((b) => b.id === blogId);

  if(!blog) {
    return res.status(404).json({
        message: "Blog not found"
    })
  }

  req.blog = blog;

  next();
}
