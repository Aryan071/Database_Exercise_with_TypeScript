import { Request, Response } from 'express';
import loginModel from './login_model';

type User = {
  name: string;
  password: string;
  role: string;
};

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}
const userLogin = async (req: Request, res: Response) => {
  const userName: any = req.query.user_name;
  const userPassword: any = req.query.user_password;
  const userRole: any = req.query.user_role;
  
  
  if(userName && userPassword && userRole){
    let data = await loginModel.userData(userName);
    let name: string = data.rows[0].username;
    let password: string = data.rows[0].password;
    let role: string = data.rows[0].role;
  
    if (name == userName) {
      if (password == userPassword) {
        req.session.user = { name, password, role };
        res.json("You are logged in");
      } else {
        res.json("Your password is incorrect");
      }
    } else {
      res.json("Your user name is incorrect");
    }
  }

  // else if(err instanceof ValidationError){
  //   return res.status(err.statusCode).json(err);
  // }
  
}

const userLogout = (req: Request, res: Response): void => {
  req.session.destroy((err: Error) => {
    if (err) {
      return console.log(err);
    } else {
      res.json("You are logged out");
    }
  });
}

export default { userLogin, userLogout };