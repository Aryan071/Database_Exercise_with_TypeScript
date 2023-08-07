"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ceo_controller_1 = __importDefault(require("./ceo_controller"));
const role_1 = __importDefault(require("../Utilities/role"));
const session_1 = __importDefault(require("../Utilities/session"));
const router = express_1.default.Router();
router.get("/getCustomer", session_1.default, role_1.default, ceo_controller_1.default.getCustomerData);
router.get("/getBookings", session_1.default, role_1.default, ceo_controller_1.default.getBookingData);
router.get("/getUniqueCustomer", session_1.default, role_1.default, ceo_controller_1.default.getUniqueCustomerData);
router.get("/getSelectedCustomer", session_1.default, role_1.default, ceo_controller_1.default.getSelectedCustomerData);
exports.default = router;
