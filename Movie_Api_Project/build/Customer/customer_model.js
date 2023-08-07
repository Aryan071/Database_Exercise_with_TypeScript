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
const getMovieData = (movieId) => {
    return db.queryRun("select movie.name from movie inner join shows sh on movie.id = sh.movie_id inner join cinema_hall on sh.cinema_hall_id = cinema_hall.id where cinema_hall.id = $1 ", [movieId]);
};
const searchMovie = (movieName) => {
    return db.queryRun("select * from movie where movie.name = $1", [movieName]);
};
const showSeatingPlanData = (cityName, movieName, cinemaName, cinemaHallName, dateOfShow, timeOfShow) => {
    return db.queryRun("update city set name = $1, state = $1 where id = $1", [
        cityName,
        movieName,
        cinemaName,
        cinemaHallName,
        dateOfShow,
        timeOfShow
    ]);
};
const topTenActorsData = () => {
    return db.queryRun("select count(actor_id) movies_count ,ac.name from movie_cast inner join actor ac on movie_cast.actor_id = ac.id  group by ac.name order by count(actor_id) desc limit 10;", []);
};
const searchMovieByYear = (year) => {
    return db.queryRun("select name,release_date from movie where extract(year from release_date = $1 ", [year]);
};
exports.default = {
    getMovieData,
    searchMovie,
    showSeatingPlanData,
    topTenActorsData,
    searchMovieByYear
};
