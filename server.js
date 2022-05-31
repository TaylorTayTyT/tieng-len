const express = require("express");
const app = express(); 
const nunjucks = require("nunjucks")

nunjucks.configure(__dirname + "/views", {
    autoescape: true, 
    cache: false,
    express: app
});

//renders html files in public
//app.use(express.static("public"));

//lets you access middleware
app.use(express.urlencoded({extended: true}));

//lets you parse json info
app.use(express.json());

app.get("/", (req, res) => {
    console.log("hi");
    res.render("home.njk", {t: "Taylor"})
})

const userRouter = require("./routes/users");

//redirects tp the routes in ./routes/users files
app.use("/users", userRouter);

app.listen(3000);
