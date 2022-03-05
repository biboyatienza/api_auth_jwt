"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = __importDefault(require("dotenv"));
var http_errors_1 = __importDefault(require("http-errors"));
dotenv_1.default.config();
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(morgan_1.default('dev'));
var createdBy = '-- Bboy 22.Feb.2022 Ejs x TS';
app.get('/check', function (req, res, next) {
    res.send({
        status: 200,
        message: "All OK! " + createdBy
    });
});
app.use(function (req, res, next) {
    next(new http_errors_1.default.NotFound());
});
app.use(function (err, req, res, next) {
    res.status = err.status || 500;
    res.send({
        status: res.status,
        message: err.message
    });
});
var PORT = Number(process.env.PORT) || 3000;
var server = app.listen(PORT, function () {
    console.log("Game! " + createdBy);
});
