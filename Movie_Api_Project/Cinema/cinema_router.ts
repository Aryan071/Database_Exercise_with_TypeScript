import express from "express";
const router = express.Router();
import cinemaController from './cinema_controller';
import isLogin from '../Utilities/session';
import checkRole from '../Utilities/role';

router.get("/getCinema",isLogin,checkRole,cinemaController.getCinemaData);
router.get("/addCinema",isLogin,checkRole,cinemaController.addCinemaData);
router.get("/updateCinema/:id",isLogin,checkRole,cinemaController.updateCinemaData);
router.get("/deleteCinema/:id",isLogin,checkRole,cinemaController.deleteCinemaData);

export default router;