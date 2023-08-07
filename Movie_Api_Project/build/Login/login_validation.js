"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
// import {Response,Request,NextFunction} from 'express'
const loginValidation = {
    query: express_validation_1.Joi.object({
        user_name: express_validation_1.Joi.string().min(3).required(),
        user_password: express_validation_1.Joi.string().min(5).regex(/[a-zA-Z0-9]{3,30}/).required(),
        user_role: express_validation_1.Joi.string().required()
    })
};
//   const validation = (req:Request,res:Response,next:NextFunction) =>{
//     if(validate(loginValidation)){
//         next();
//     }else if(ValidationError){
//         res.json("Enter your details properly");
//     }
//   }
exports.default = { loginValidation };
