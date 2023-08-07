"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const login_controller_1 = __importDefault(require("./login_controller"));
const login_validation_1 = __importDefault(require("./login_validation"));
const express_validation_1 = require("express-validation");
router.post("/", (0, express_validation_1.validate)(login_validation_1.default.loginValidation), login_controller_1.default.userLogin);
router.post("/logout", (0, express_validation_1.validate)(login_validation_1.default.loginValidation), login_controller_1.default.userLogout);
exports.default = router;
