import { QueryResult } from "pg";
import * as db from "../Utilities/database";


interface cinemaData{
  cinemaData:string;
}
const cinemaData = (): Promise<QueryResult<cinemaData>> => {
  return db.queryRun("select * from cinema",[]);
};

const addCinema = (
  cinemaName: string,
  cinemaCity: string,
  cinemaCode: string,
  cinemaAddress: string
):void => {
   db.queryRun(
    `insert into cinema(name,city_id,code,address) values($1,$1,$1,$1)`,
    [cinemaName, cinemaCity, cinemaCode, cinemaAddress]
  );
};

const updateCinema = (
  cinemaName: string,
  cinemaCity: string,
  cinemaCode: string,
  cinemaAddress: string,
  movieId: string
): void => {
   db.queryRun(
    "update cinema set name = $1, city_id =  $1,code =  $1,address =  $1 where id =  $1",
    [cinemaName, cinemaCity, cinemaCode, cinemaAddress, movieId]
  );
};

const deleteCinema = (cinemaId: string): void=> {
   db.queryRun("delete from cinema where id = $1", [cinemaId]);
};

export default { cinemaData, addCinema, updateCinema, deleteCinema };