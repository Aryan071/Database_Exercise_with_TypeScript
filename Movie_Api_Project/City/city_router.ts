import express from "express";
const router = express.Router();
import cityController from './city_controller';
import isLogin from '../Utilities/session';
import checkRole from '../Utilities/role';

router.get("/getCity",isLogin,checkRole,cityController.getCityData);
router.get("/addCity",isLogin,checkRole,cityController.addCityData);
router.get("/updateCity/:id",isLogin,checkRole,cityController.updateCityData);
router.get("/deleteCity/:id",isLogin,checkRole,cityController.deleteCityData);

export default router;