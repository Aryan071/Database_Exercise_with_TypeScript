"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const city_controller_1 = __importDefault(require("./city_controller"));
const session_1 = __importDefault(require("../Utilities/session"));
const role_1 = __importDefault(require("../Utilities/role"));
router.get("/getCity", session_1.default, role_1.default, city_controller_1.default.getCityData);
router.get("/addCity", session_1.default, role_1.default, city_controller_1.default.addCityData);
router.get("/updateCity/:id", session_1.default, role_1.default, city_controller_1.default.updateCityData);
router.get("/deleteCity/:id", session_1.default, role_1.default, city_controller_1.default.deleteCityData);
exports.default = router;
