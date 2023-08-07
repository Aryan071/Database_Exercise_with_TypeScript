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
const customer_model_1 = __importDefault(require("./customer_model"));
const getMovieData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield customer_model_1.default.getMovieData(req.params.id);
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
const searchMovieData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield customer_model_1.default.searchMovie(req.params.movie_name);
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
const getShowSeatingPlanData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield customer_model_1.default.showSeatingPlanData(req.query.city_name, req.query.movie_name, req.query.cinema_name, req.query.cinema_hall_name, req.query.date_of_the_show, req.query.time_of_the_show);
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
const getTopTenActorsData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield customer_model_1.default.topTenActorsData();
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
const searchMovieByYearData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield customer_model_1.default.searchMovieByYear(req.params.year);
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
exports.default = { getMovieData, searchMovieData, getShowSeatingPlanData, getTopTenActorsData, searchMovieByYearData };
