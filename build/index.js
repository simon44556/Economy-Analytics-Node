"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const RequestHandle_1 = require("./RequestHandler/RequestHandle");
const port = 3000;
const app = (0, express_1.default)();
const requestHandle = new RequestHandle_1.RequestHandle(app);
http_1.default.createServer(app).listen(port, () => console.log(`Runningst at http://localhost:${port}/`));