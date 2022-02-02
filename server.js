const express = require("express");
const server = express();

server.set("view engine", "ejs");

server.get("/", (request, response) => {
    response.send("Im here for you");
    //response.render("index");
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))