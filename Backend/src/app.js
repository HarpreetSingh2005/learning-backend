const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const Post = require("./models/post.model");

const app = express();

const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const result = await uploadFile(req.file.buffer);
  const newPost = await Post.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "Post created successfully",
    post: newPost,
  });
});

app.get("/posts", async (req, res) => {
  const post = await Post.find();
  return res.status(200).json({
    message: "Posts fetch successfully",
    post,
  });
});

module.exports = app;
