import * as redis from "redis";
const redisClient = redis.createClient();

redisClient.on("error", (err: Error) =>
  console.log("Can not establish the connection", err)
);

(async () => {
  await redisClient.connect();
})();

redisClient.on("connect", () => {
  console.log("Connected!");
});

export default redisClient;