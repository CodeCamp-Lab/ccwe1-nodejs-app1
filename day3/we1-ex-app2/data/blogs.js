export const blogs = [
  {
    id: 1,
    title: "Express Nested Routes",
    content: "Learn how to structure nested routes in Express.js.",
    comments: [
      { id: 1, author: "Alice", message: "Thanks for the article!" },
      { id: 2, author: "Bob", message: "Very helpful, bookmarked." }
    ]
  },
  {
    id: 2,
    title: "Node.js Tips",
    content: "A collection of tips for better Node.js development.",
    comments: [
      { id: 1, author: "Charlie", message: "Nice tips." }
    ]
  },
  {
    id: 3,
    title: "Understanding Middleware",
    content: "Middleware are functions that have access to the request and response.",
    comments: []
  }
];
