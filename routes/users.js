const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        "name": "Tiffany"
    })
    //res.render("../views/home.njk");
})

router.get("/new", (req, res) => {
    res.render("../views/home.njk");
})

router.post("/", (req, res) => {
    res.send("userCreated")
})

//:id is a paramater

router
    .route("/:id").get((req, res) => {
        res.send(`YPPP ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`YPPP ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`YPPP ID ${req.params.id}`)
    })

    const users = [{name: "Kyle"}, {name: "Sally"}]

router.param("id", (req, res, next, id) => {
    console.log(id);
    req.user = users[id];
    next();
})

module.exports = router