const express = require("express");
const router = express.Router(); 

router.get("/", (req, res) => {
    res.render("../views/home.njk");
})

router.get("/new", (req, res) => {
    res.render("../views/home.njk");
})

module.exports = router