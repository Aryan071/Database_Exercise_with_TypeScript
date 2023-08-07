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
const cinema_model_1 = __importDefault(require("./cinema_model"));
const getCinemaData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield cinema_model_1.default.cinemaData();
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
const addCinemaData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = cinema_model_1.default.addCinema(req.body.name, req.body.city_id, req.body.code, req.body.address);
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
const updateCinemaData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = cinema_model_1.default.updateCinema(req.body.name, req.body.city_id, req.body.code, req.body.address, req.params.id);
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
const deleteCinemaData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = cinema_model_1.default.deleteCinema(req.params.id);
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
exports.default = { getCinemaData, addCinemaData, updateCinemaData, deleteCinemaData };
