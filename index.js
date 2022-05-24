const debug = require("debug")("bloo-chat");
const nunjucks = require("nunjucks");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const http = require("http").Server(app);
const io = require("socket.io")(http);

const router = express.Router();
const bp = require("body-parser");
const parse = bp.urlencoded({ extended: false });
const MakeUser = require("./data/MakeUser.js");
const Authenticate = require("./data/Authenticate");
const keepTrackSocket = [];
const keepTrackName = [];

const mongoose = require("mongoose");
const { suppressValue } = require("nunjucks/src/runtime");

const mongoose = require("mongoose");
const { suppressValue } = require("nunjucks/src/runtime");

const axios = require("axios");

const URI = "mongodb+srv://TaylorTayTyT:helloshorty@chatbat.wzcwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const port = process.env.PORT || 7000;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static("assets"));