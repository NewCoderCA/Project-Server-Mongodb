const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blogs");
const server = express();

mongoose.connect("mongodb://localhost/blogs", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

server.set("view engine", "ejs");
server.use("/public", express.static("public"));
server.use(express.urlencoded({ extended: false }));


server.get("/", (request, response) => {
    const blogs = [{
        title: 'Test Blog',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Blog2',
        createdAt: new Date(),
        description: 'Test description2'
    },
      {
        title: 'Test Blog3',
        createdAt: new Date(),
        description: 'Test description3'
    }]
    response.render("blogs/index", { blogs: blogs });
});


server.use("/blogs", blogRouter);

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))