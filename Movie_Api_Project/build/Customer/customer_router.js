"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_controller_1 = __importDefault(require("./customer_controller"));
const session_1 = __importDefault(require("../Utilities/session"));
const router = express_1.default.Router();
router.get("/getMovies/:id", session_1.default, customer_controller_1.default.getMovieData);
router.get("/searchMovies/:movie_name", session_1.default, customer_controller_1.default.searchMovieByYearData);
router.get("/showSeatingPlan", session_1.default, customer_controller_1.default.getShowSeatingPlanData);
router.get("/topTenActors", session_1.default, customer_controller_1.default.getTopTenActorsData);
router.get("/movieByYear/:year", session_1.default, customer_controller_1.default.searchMovieByYearData);
exports.default = router;
