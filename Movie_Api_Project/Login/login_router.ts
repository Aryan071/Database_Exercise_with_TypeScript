import express from "express";
const router = express.Router();
import loginController from './login_controller';
import userValidation from './login_validation';
import { validate } from 'express-validation'


router.post("/",validate(userValidation.loginValidation),loginController.userLogin);
router.post("/logout",validate(userValidation.loginValidation),loginController.userLogout)


export default router;