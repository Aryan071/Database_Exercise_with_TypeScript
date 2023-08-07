"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cinema_controller_1 = __importDefault(require("./cinema_controller"));
const session_1 = __importDefault(require("../Utilities/session"));
const role_1 = __importDefault(require("../Utilities/role"));
router.get("/getCinema", session_1.default, role_1.default, cinema_controller_1.default.getCinemaData);
router.get("/addCinema", session_1.default, role_1.default, cinema_controller_1.default.addCinemaData);
router.get("/updateCinema/:id", session_1.default, role_1.default, cinema_controller_1.default.updateCinemaData);
router.get("/deleteCinema/:id", session_1.default, role_1.default, cinema_controller_1.default.deleteCinemaData);
exports.default = router;
