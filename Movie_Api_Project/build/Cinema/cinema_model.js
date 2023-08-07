"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = __importStar(require("../Utilities/database"));
const cinemaData = () => {
    return db.queryRun("select * from cinema", []);
};
const addCinema = (cinemaName, cinemaCity, cinemaCode, cinemaAddress) => {
    db.queryRun(`insert into cinema(name,city_id,code,address) values($1,$1,$1,$1)`, [cinemaName, cinemaCity, cinemaCode, cinemaAddress]);
};
const updateCinema = (cinemaName, cinemaCity, cinemaCode, cinemaAddress, movieId) => {
    db.queryRun("update cinema set name = $1, city_id =  $1,code =  $1,address =  $1 where id =  $1", [cinemaName, cinemaCity, cinemaCode, cinemaAddress, movieId]);
};
const deleteCinema = (cinemaId) => {
    db.queryRun("delete from cinema where id = $1", [cinemaId]);
};
exports.default = { cinemaData, addCinema, updateCinema, deleteCinema };
