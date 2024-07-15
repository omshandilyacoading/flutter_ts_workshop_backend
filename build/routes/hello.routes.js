"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const helloRouter = (0, express_1.Router)();
helloRouter.get("/", (req, res) => {
    res.send({ "data": "Hello, World!" });
});
exports.default = helloRouter;
