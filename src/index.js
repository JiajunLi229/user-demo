"use strict";
exports.__esModule = true;
exports.port = void 0;
var express = require('express');
var userRouter = require('../routers');
var app = express();
app.use(express.json());
exports.port = process.env.PORT || 3000;
// 起个环境变量：在build的时候传入
//dockercompose
app.use('/users', userRouter);
app.use(function (req, res) {
    res.status(404).send("Sorry can't find that!");
});
app.listen(exports.port, console.log("baby I'm ready on port " + exports.port));
