import { QueryResult } from "pg";
import * as db from "../Utilities/database";

interface City{
  id:number,
  name:string,
  state:string
}

const cityData = async (): Promise<City[]> => {
  const result = await db.queryRun("select * from city", []);
  const cities: City[]= result.rows;
  return cities;
};

const addCity = (cityName: string, stateName: string): void => {
   db.queryRun("insert into city(name,state) values($1,$1)", [
    cityName,
    stateName,
  ]);
};

const updateCity = (
  cityName: string,
  stateName: string,
  cityId: string
): void => {
   db.queryRun(
    "update city set name = $1, state = $1 where id = $1",
    [cityName, stateName, cityId]
  );
};

const deleteCity = (cityId: string): void => {
   db.queryRun("delete from city where id = $1", [cityId]);
};

export { cityData, addCity, updateCity, deleteCity };