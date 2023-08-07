"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryRun = void 0;
const pg_1 = require("pg");
//Connect with database
function connect() {
    const pool = new pg_1.Pool({
        user: "postgres",
        host: "localhost",
        port: 5432,
        database: "Movie_Data",
        password: "1978",
    });
    return pool;
}
let pool2 = connect();
function queryRun(queryText, values) {
    return new Promise((resolve, reject) => {
        pool2.query(queryText, values, (err, dbRes) => {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(dbRes);
            }
        });
    });
}
exports.queryRun = queryRun;
