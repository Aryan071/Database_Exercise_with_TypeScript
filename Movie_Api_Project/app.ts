import express from "express";
import path from "path";
import session from "express-session";
import { ValidationError } from 'express-validation';
import { Request, Response,NextFunction } from 'express';
// import RedisStore from "connect-redis";
// import redisClient from "./Utilities/redis";

// Routers
import cityRouter from "./City/city_router";
import cinemaRouter from "./Cinema/cinema_router";
import customerRouter from "./Customer/customer_router";
import ceoRouter from "./Ceo/ceo_route";
import loginRouter from "./Login/login_router";

// view engine setup
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

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

app.use(
  session({
    secret: "aaabbbddd",
    resave: false,
    saveUninitialized: false,
    // ttl:10,
    cookie: {
      maxAge: 10000,
    },
  })
);


app.use("/city", cityRouter);
app.use("/cinema", cinemaRouter);
app.use("/customer", customerRouter);
app.use("/ceo", ceoRouter);
app.use("/login", loginRouter);
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

app.use(function(err:Error, req:Request, res:Response, next:NextFunction) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  return res.status(500).json(err)
})

app.listen(4000, () => {
  console.log("Port is running");
});
export default app;