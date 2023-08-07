import { Pool, QueryResult } from "pg";

//Connect with database
function connect(): Pool {
  const pool: Pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "Movie_Data",
    password: "1978",
  });
  return pool;
}
let pool2: Pool = connect();

function queryRun(queryText: string, values: string[]|number[]) {
  return new Promise<QueryResult>((resolve, reject) => {
    pool2.query(queryText, values, (err: Error, dbRes: QueryResult) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(dbRes);
      }
    });
  });
}

export{queryRun};