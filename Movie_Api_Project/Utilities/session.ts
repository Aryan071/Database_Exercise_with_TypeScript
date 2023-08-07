import { Request, Response, NextFunction } from "express";
import session from "express-session";

const isLogin = async (req: Request, res: Response, next: NextFunction) => {
  if (req.session.user) {
    let user = req.session.user;
    let username = user.name;
    let password = user.password;

    if (!username && !password) {
      res.json({ status: "you are not logged in" });
    } else {
      next();
    }
  } else {
    res.json("you are not logged in");
  }
};

export default isLogin;
