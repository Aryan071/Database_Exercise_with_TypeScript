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
const ceo_model_1 = __importDefault(require("./ceo_model"));
const getCustomerData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ceo_model_1.default.customerData();
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
const getBookingData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ceo_model_1.default.bookingData();
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
const getUniqueCustomerData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ceo_model_1.default.uniqueCustomer();
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
const getSelectedCustomerData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ceo_model_1.default.selectedCustomer(+req.params.movie_id, +req.params.cinema_id);
        return res.json(data);
    }
    catch (error) {
        return res.json({ status: "failed to fetch" });
    }
});
exports.default = { getCustomerData, getBookingData, getUniqueCustomerData, getSelectedCustomerData };
