import { Joi } from 'express-validation'
// import {Response,Request,NextFunction} from 'express'


const loginValidation = {
    query: Joi.object({
      user_name: Joi.string().min(3).required(),
      user_password: Joi.string().min(5).regex(/[a-zA-Z0-9]{3,30}/).required(),
      user_role: Joi.string().required()
    })
  }

//   const validation = (req:Request,res:Response,next:NextFunction) =>{
//     if(validate(loginValidation)){
//         next();
//     }else if(ValidationError){
//         res.json("Enter your details properly");
       
//     }
//   }
  export default {loginValidation};