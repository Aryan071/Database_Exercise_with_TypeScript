import * as db from "../Utilities/database";

const userData = async (userName: string) => {
   return db.queryRun(
      "select username,password,role from user_data where username = $1",
      [userName]
    );
}

export default { userData };