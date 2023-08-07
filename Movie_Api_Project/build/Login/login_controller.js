"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_model_1 = __importDefault(require("./login_model"));
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = req.query.user_name;
    const userPassword = req.query.user_password;
    const userRole = req.query.user_role;
    if (userName && userPassword && userRole) {
        let data = yield login_model_1.default.userData(userName);
        let name = data.rows[0].username;
        let password = data.rows[0].password;
        let role = data.rows[0].role;
        if (name == userName) {
            if (password == userPassword) {
                req.session.user = { name, password, role };
                res.json("You are logged in");
            }
            else {
                res.json("Your password is incorrect");
            }
        }
        else {
            res.json("Your user name is incorrect");
        }
    }
    // else if(err instanceof ValidationError){
    //   return res.status(err.statusCode).json(err);
    // }
});
const userLogout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        else {
            res.json("You are logged out");
        }
    });
};
exports.default = { userLogin, userLogout };
