"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const express_validation_1 = require("express-validation");
// import RedisStore from "connect-redis";
// import redisClient from "./Utilities/redis";
// Routers
const city_router_1 = __importDefault(require("./City/city_router"));
const cinema_router_1 = __importDefault(require("./Cinema/cinema_router"));
const customer_router_1 = __importDefault(require("./Customer/customer_router"));
const ceo_route_1 = __importDefault(require("./Ceo/ceo_route"));
const login_router_1 = __importDefault(require("./Login/login_router"));
// view engine setup
const app = (0, express_1.default)();
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// app.use(
//   session({
//     secret: "aaabbbddd",
//     store: new RedisStore({ client: redisClient }),
//     // host: "localhost",
//     // port: 6379,
//     resave: false,
//     saveUninitialized: false,
//     // ttl:10,
//     cookie: {
//       maxAge: 60000,
//     },
//   })
// );
app.use((0, express_session_1.default)({
    secret: "aaabbbddd",
    resave: false,
    saveUninitialized: false,
    // ttl:10,
    cookie: {
        maxAge: 10000,
    },
}));
app.use("/city", city_router_1.default);
app.use("/cinema", cinema_router_1.default);
app.use("/customer", customer_router_1.default);
app.use("/ceo", ceo_route_1.default);
app.use("/login", login_router_1.default);
// app.use((err, req, res, next) => {
//   eslint-disable-line no-unused-vars
//   let errorResponse = {
//     success: false,
//     message: err.isPublic ? err.message : "Something Went wrong.Please try again!",
//     stack: app.get("env") === "development" ? err.stack : {},
//   };
//   console.log("errorResponse/////////////////", errorResponse);
//   res.status(err.status).json(errorResponse);
// });
app.use(function (err, req, res, next) {
    if (err instanceof express_validation_1.ValidationError) {
        return res.status(err.statusCode).json(err);
    }
    return res.status(500).json(err);
});
app.listen(4000, () => {
    console.log("Port is running");
});
exports.default = app;
