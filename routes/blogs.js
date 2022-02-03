const express = require("express");
const Blog = require("../routes/models/blog");
const router = express.Router();

router.get("/new", (request, response) => {
response.render("blogs/new", { blog: new Blog() }) //Blank default blog
})

router.get("/:id", (request, response) => {
     response.send(request.params.id) //Send blog.id
})


//Save new async await new blog posted with prefilled blog info
router.post("/", async (request, response) => {
    let blog = new Blog({
        title: request.body.title,
        description: request.body.description,
    })
    try {
        blog = await blog.save()
        response.redirect(`/blogs/${blog.id}`)
    }   catch (error){
        response.render("blogs/new", { blog: blog })
    }
})

module.exports = router