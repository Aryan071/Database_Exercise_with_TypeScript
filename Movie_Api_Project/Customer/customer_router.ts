import express from "express";
import { Router } from "express";
import customerController from "./customer_controller";
import isLogin from "../Utilities/session";

const router: Router = express.Router();

router.get("/getMovies/:id", isLogin, customerController.getMovieData);
router.get("/searchMovies/:movie_name", isLogin, customerController.searchMovieByYearData);
router.get("/showSeatingPlan", isLogin, customerController.getShowSeatingPlanData);
router.get("/topTenActors", isLogin, customerController.getTopTenActorsData);
router.get("/movieByYear/:year", isLogin, customerController.searchMovieByYearData);

export default router;