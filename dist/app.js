"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(morgan_1.default('dev'));
var createdBy = '-- Bboy 22.Feb.2022 Ejs x';
app.get('/check', function (req, res, next) {
    res.send({
        status: 200,
        message: "All OK! " + createdBy
    });
});
var PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, function () {
    console.log("Game! " + createdBy);
});
