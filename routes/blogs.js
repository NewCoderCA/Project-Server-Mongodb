const express = require("express");
const Blog = require("../routes/models/blog");
const router = express.Router();

router.get("/new", (request, response) => {
response.render("blogs/new", { blog: new Blog() }) //Blank default blog
})


//Edit blog
router.get("/edit/:id", async (request, response) => {
    const blog = await Blog.findById(request.params.id)  
    if (blog == null) response.redirect("/");
    response.render('blogs/edit', { blog: blog })
})

//Show edited blog
router.get("/:id", async (request, response) => {
    console.log(`ID VALUE: ${request.params.id}`);
    const blog = await Blog.findById(request.params.id)
    if (blog == null) response.redirect("/");
    response.render('blogs/show', { blog: blog })
})

//Save new blog with prefilled info
router.post("/", async (request, response, next) => {
    request.blog = new Blog();
    next();
}, editBlogRedirect("new"))


//Save edited blog
router.put("/:id", async (request, response, next) => {
    request.blog = await Blog.findById(request.params.id);
    next();
}, editBlogRedirect("edit"));


function editBlogRedirect(path) {
   return async (request, response) => {
   let blog = request.blog;
        blog.title = request.body.title;
        blog.description = request.body.description;

    try {
        blog = await blog.save()
        response.redirect(`/blogs/${blog.id}`)
    }   catch (error){
        response.render(`blogs/${path}`, { blog: blog })
    }
}
}


//Delete blog 
router.delete("/:id", async (request, response) => {
    await Blog.findByIdAndDelete(request.params.id)
    response.redirect("/");
})

module.exports = router;