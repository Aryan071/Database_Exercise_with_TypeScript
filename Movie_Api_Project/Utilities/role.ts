import express from "express";

const checkRole = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.session.user) {
    let user:any = req.session.user;
    let user_role:any = user.role;
    if (user_role != 'Admin') {
      res.json({ status: "you are not a admin" });
    } else {
      next();
    }
  } else {
    res.json("You are not logged in");
  }
};

export default checkRole;