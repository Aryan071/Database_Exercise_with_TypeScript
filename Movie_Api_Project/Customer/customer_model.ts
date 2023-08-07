import { QueryResult } from "pg";
import * as db from "../Utilities/database";

interface movieData{
  movieData:string
}

interface seatingPlanData{
  seatingPlanData:string
}

interface actorData{
  actorData:string
}

const getMovieData = (movieId: string): Promise<QueryResult<movieData>> => {
  return db.queryRun(
    "select movie.name from movie inner join shows sh on movie.id = sh.movie_id inner join cinema_hall on sh.cinema_hall_id = cinema_hall.id where cinema_hall.id = $1 ",
    [movieId]
  );
};

const searchMovie = (movieName: string): Promise<QueryResult<movieData>> => {
  return db.queryRun("select * from movie where movie.name = $1", [movieName]);
};

const showSeatingPlanData = (
  cityName: string,
  movieName: string,
  cinemaName: string,
  cinemaHallName: string,
  dateOfShow: string,
  timeOfShow: string
): Promise<QueryResult<seatingPlanData>> => {
  return db.queryRun(
    "update city set name = $1, state = $1 where id = $1",
    [
      cityName,
      movieName,
      cinemaName,
      cinemaHallName,
      dateOfShow,
      timeOfShow
    ]
  );
};

const topTenActorsData = (): Promise<QueryResult<actorData>> => {
  return db.queryRun(
    "select count(actor_id) movies_count ,ac.name from movie_cast inner join actor ac on movie_cast.actor_id = ac.id  group by ac.name order by count(actor_id) desc limit 10;",[]
  );
};

const searchMovieByYear = (year: string): Promise<QueryResult<movieData>> => {
  return db.queryRun(
    "select name,release_date from movie where extract(year from release_date = $1 ",
    [year]
  );
};

export default {
  getMovieData,
  searchMovie,
  showSeatingPlanData,
  topTenActorsData,
  searchMovieByYear
};