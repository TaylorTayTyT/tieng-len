const express = require("express");
const app = express(); 
const nunjucks = require("nunjucks")

nunjucks.configure(__dirname + "/views", {
    autoescape: true, 
    cache: false,
    express: app
});

app.get("/", (req, res) => {
    res.render("home.njk", {t: "Taylor"})
})

const userRouter = require("./routes/users");


app.use("/users", userRouter);

app.listen(3000);
