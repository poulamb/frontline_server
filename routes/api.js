var express = require("express");
var authRouter = require("./auth");
var mainRouter = require("./main");
var statsRouter = require("./stats");

var app = express();

app.use("/auth/", authRouter);
app.use("/stats", statsRouter);
app.use("/", mainRouter);

module.exports = app;
