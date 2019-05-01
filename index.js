"use strict";
var express = require("express");// adding express into our servers
var app = express();/// store express() in a var
var PORT = 8081;
app.use(express.static("public"));
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

