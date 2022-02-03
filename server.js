const express = require("express");
const blogRouter = require("./routes/blogs");
const server = express();

server.set("view engine", "ejs");

server.use("/public", express.static("public"));


server.use("/blogs", blogRouter)

server.get("/", (request, response) => {
    const blogs = [{
        title: 'Test Blog',
        createdAt: Date.now(),
        description: 'Test description'
    },
    {
        title: 'Test Blog2',
        createdAt: Date.now(),
        description: 'Test description2'
    },
      {
        title: 'Test Blog3',
        createdAt: Date.now(),
        description: 'Test description3'
    }]
    response.render("index", { blogs: blogs });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))