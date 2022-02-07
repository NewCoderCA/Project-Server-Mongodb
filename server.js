const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./routes/models/blog");
const blogRouter = require("./routes/blogs");
const methodOverride = require("method-override");
const server = express();

mongoose.connect("mongodb://localhost/blogs", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

server.set("view engine", "ejs");
server.use("/public", express.static("public"));
server.use(express.urlencoded({ extended: false }));
server.use(methodOverride("_method"));


server.get("/", async (request, response) => {
    const blogs = await Blog.find().sort({ createdAt: 'desc' })
    response.render("blogs/index", { blogs: blogs });
});


server.use("/blogs", blogRouter);

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))