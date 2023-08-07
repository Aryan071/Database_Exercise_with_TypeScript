import express from "express";
import { Router } from "express";
import ceoController from "./ceo_controller";
import checkRole from "../Utilities/role";
import isLogin from "../Utilities/session";

const router: Router = express.Router();

router.get("/getCustomer", isLogin, checkRole, ceoController.getCustomerData);
router.get("/getBookings", isLogin, checkRole, ceoController.getBookingData);
router.get("/getUniqueCustomer", isLogin, checkRole, ceoController.getUniqueCustomerData);
router.get("/getSelectedCustomer", isLogin, checkRole, ceoController.getSelectedCustomerData);

export default router;