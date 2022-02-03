const express = require("express");
const router = express.Router();

router.get("/new", (request, response) => {
//    response.send("Welcome to Blogs")
response.render("blogs/new")
})


// router.post("/", (request, response) => {
// // response.render()
// })


module.exports = router